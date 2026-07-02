import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// お問い合わせの送信先（両アドレスに届く）
const TO = (process.env.CONTACT_TO ?? "rs@enjoylife-yao.com,mk@enjoylife-yao.com")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

// 送信元。Resend で認証済みドメインのアドレスにする必要がある
const FROM = process.env.CONTACT_FROM ?? "enjoy life お問い合わせ <noreply@enjoylife-yao.com>";

type Payload = {
  name?: string;
  email?: string;
  tel?: string;
  category?: string;
  message?: string;
};

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY が設定されていません");
    return NextResponse.json(
      { error: "メール送信が設定されていません。しばらくしてからお試しください。" },
      { status: 500 }
    );
  }

  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "不正なリクエストです。" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const tel = (body.tel ?? "").trim();
  const category = (body.category ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "お名前・メールアドレス・お問い合わせ内容は必須です。" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "メールアドレスの形式が正しくありません。" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const rows: [string, string][] = [
    ["お名前", name],
    ["メールアドレス", email],
    ["電話番号", tel || "（未入力）"],
    ["種別", category || "（未選択）"],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,'Hiragino Kaku Gothic ProN',sans-serif;color:#2b2b2b;line-height:1.7;">
      <h2 style="font-size:16px;margin:0 0 12px;">ホームページよりお問い合わせがありました</h2>
      <table style="border-collapse:collapse;font-size:14px;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#777;white-space:nowrap;vertical-align:top;">${k}</td><td style="padding:6px 0;">${escapeHtml(
                v
              )}</td></tr>`
          )
          .join("")}
      </table>
      <div style="margin-top:16px;">
        <div style="color:#777;font-size:14px;margin-bottom:6px;">お問い合わせ内容</div>
        <div style="white-space:pre-wrap;font-size:14px;background:#f6f6f4;border-radius:8px;padding:12px;">${escapeHtml(
          message
        )}</div>
      </div>
    </div>
  `;

  const text = [
    "ホームページよりお問い合わせがありました",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "お問い合わせ内容:",
    message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `【お問い合わせ】${category || "その他"} - ${name} 様`,
      html,
      text,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: "送信に失敗しました。時間をおいて再度お試しください。" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}
