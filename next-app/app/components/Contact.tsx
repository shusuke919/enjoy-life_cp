"use client";

import { useState } from "react";
import { homes } from "../lib/data";
import { homeDetails } from "../lib/homeDetails";

type FormState = {
  name: string;
  email: string;
  tel: string;
  category: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  tel: "",
  category: "入居について",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "送信に失敗しました。時間をおいて再度お試しください。");
      }
      setSubmitted(true);
      setForm(empty);
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="va-section va-contact" id="contact">
      <div className="va-contact-inner">
        <div className="va-contact-head reveal">
          <div className="va-section-label">
            <span style={{ background: "#E85A8A" }} /> Contact
          </div>
          <h2 className="va-section-title">
            まずは、
            <br />
            お気軽にご相談ください。
          </h2>
          <p className="va-contact-sub">
            ご本人様、ご家族、相談支援専門員の方、
            <br />
            どなたからのご相談でも承ります。
          </p>
          <div className="va-contact-tel">
            <span className="va-tel-label">お電話でのお問い合わせ</span>
            <a href="tel:070-8319-1421">070-8319-1421</a>
            <span className="va-tel-hours">平日 9:00 - 18:00</span>
          </div>
          <div className="va-contact-pdfs">
            <span className="va-tel-label">パンフレットダウンロード</span>
            <p className="va-contact-pdfs-note">
              各事業所のパンフレット（A4・1ページ）をPDFでダウンロードいただけます。
            </p>
            <div className="va-contact-pdfs-grid">
              {homes
                .map((h) => ({ home: h, detail: homeDetails[h.slug] }))
                .filter(({ detail }) => detail.pdfUrl)
                .map(({ home: h, detail }) => (
                <a
                  key={h.slug}
                  href={detail.pdfUrl}
                  download={detail.pdfFilename}
                  className="va-pdf-dl"
                  style={{ ["--accent" as string]: h.color, borderColor: h.color, color: h.color }}
                  aria-label={`${h.name} のパンフレットをダウンロード`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>{h.short}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <form className="va-contact-form reveal" onSubmit={onSubmit}>
          {submitted && (
            <div className="va-form-success">
              ✓ お問い合わせを受け付けました。担当者より3営業日以内にご連絡いたします。
            </div>
          )}
          {error && <div className="va-form-error">{error}</div>}
          <label>
            <span>
              お名前 <em>必須</em>
            </span>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="山田 花子"
            />
          </label>
          <div className="va-form-row">
            <label>
              <span>
                メールアドレス <em>必須</em>
              </span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="example@mail.com"
              />
            </label>
            <label>
              <span>電話番号</span>
              <input
                type="tel"
                value={form.tel}
                onChange={(e) => setForm({ ...form, tel: e.target.value })}
                placeholder="090-0000-0000"
              />
            </label>
          </div>
          <label>
            <span>お問い合わせの種別</span>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option>入居について</option>
              <option>見学・体験利用について</option>
              <option>採用について</option>
              <option>その他</option>
            </select>
          </label>
          <label>
            <span>
              お問い合わせ内容 <em>必須</em>
            </span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="ご質問やご相談内容をご記入ください。"
            />
          </label>
          <button type="submit" className="va-btn va-btn-primary va-btn-lg" disabled={sending}>
            {sending ? "送信中…" : "送信する"} <span className="va-arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
