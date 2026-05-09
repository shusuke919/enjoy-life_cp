import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { homes, type HomeSlug } from "../../lib/data";
import { dailySchedule, homeDetails } from "../../lib/homeDetails";
import "./detail.css";

const slugs = homes.map((h) => h.slug);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const home = homes.find((h) => h.slug === slug);
  if (!home) return { title: "Not Found" };
  return {
    title: `${home.name} - 事業所詳細｜enjoy life`,
    description: `${home.name}（${home.area}・${home.rooms}）の施設概要、1日の流れ、アクセスをご案内します。`,
  };
}

export default async function HomeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const home = homes.find((h) => h.slug === slug);
  const detail = home ? homeDetails[home.slug as HomeSlug] : null;
  if (!home || !detail) notFound();

  const accent = home.color;
  const galleries: { label: string; bg: string }[] = [
    { label: "外観", bg: `linear-gradient(135deg, ${accent}33, ${accent}66)` },
    { label: "リビング", bg: "linear-gradient(135deg, #F5A73F33, #F5A73F55)" },
    { label: "個室", bg: "linear-gradient(135deg, #6FBA6C33, #6FBA6C55)" },
    { label: "ダイニング", bg: "linear-gradient(135deg, #E85A8A33, #E85A8A55)" },
    { label: "共用部", bg: `linear-gradient(135deg, ${accent}33, ${accent}44)` },
  ];

  return (
    <div className="hd-page" style={{ ["--accent" as string]: accent } as CSSProperties}>
      <header className="hd-header">
        <Link href="/" aria-label="enjoy life">
          <Image src="/assets/logo.png" alt="enjoy life" width={393} height={72} priority style={{ height: 30, width: "auto" }} />
        </Link>
        <Link className="hd-back" href="/#homes">
          ← 事業所一覧へ戻る
        </Link>
      </header>

      <section className="hd-hero">
        <div className="hd-hero-label">
          <span className="dot" />
          {detail.en} / {detail.index}
        </div>
        <h1>
          {home.name}
          <small>障がい者グループホーム / 共同生活援助</small>
        </h1>
        <div className="hd-hero-area">{detail.fullAddress}</div>
        <div className="hd-hero-features">
          {home.features.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      </section>

      <section className="hd-gallery">
        {galleries.map((g) => (
          <div key={g.label} className="hd-gallery-item" style={{ background: g.bg }}>
            <div className="label">{g.label}</div>
          </div>
        ))}
      </section>

      <section className="hd-section">
        <div className="hd-section-head">
          <span className="en">SPEC</span>
          <h2>施設概要</h2>
        </div>
        <div className="hd-spec">
          {detail.spec.map((s) => (
            <div key={s.dt}>
              <dt>{s.dt}</dt>
              <dd>{s.dd}</dd>
            </div>
          ))}
        </div>
      </section>

      {detail.pricing && (
        <section className="hd-section">
          <div className="hd-section-head">
            <span className="en">PRICING</span>
            <h2>利用料金</h2>
          </div>
          <div className="hd-pricing">
            <ul className="hd-pricing-list">
              {detail.pricing.items.map((item) => (
                <li key={item.label} className={item.amount < 0 ? "is-discount" : ""}>
                  <div className="hd-pricing-label">
                    <span>{item.label}</span>
                    {item.note && <small>{item.note}</small>}
                  </div>
                  <div className="hd-pricing-amount">
                    {item.amount < 0 ? "−" : ""}¥{Math.abs(item.amount).toLocaleString()}
                  </div>
                </li>
              ))}
            </ul>
            <div className="hd-pricing-total">
              <span>合計（月額）</span>
              <strong>¥{detail.pricing.total.toLocaleString()}</strong>
            </div>
            {detail.pricing.note && <p className="hd-pricing-note">※ {detail.pricing.note}</p>}
          </div>
        </section>
      )}

      <section className="hd-section">
        <div className="hd-section-head">
          <span className="en">A DAY</span>
          <h2>1日の流れ</h2>
        </div>
        <div className="hd-schedule">
          {dailySchedule.map((d) => (
            <div key={d.time} className="hd-schedule-card">
              <div className="hd-schedule-time">{d.time}</div>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hd-section">
        <div className="hd-section-head">
          <span className="en">ACCESS</span>
          <h2>アクセス</h2>
        </div>
        <div className="hd-access">
          <div className="hd-access-map">
            <div className="hd-access-pin">📍</div>
          </div>
          <div className="hd-access-info">
            <ul>
              {detail.access.map((a) => (
                <li key={a.label}>
                  <span>{a.label}</span>
                  {a.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hd-cta">
        <div className="hd-cta-inner">
          <h2>まずは見学・資料請求から</h2>
          <p>
            実際にご覧いただくのが一番です。
            <br />
            パンフレットのダウンロードもお気軽にどうぞ。
          </p>
          <div className="hd-cta-buttons">
            <Link className="hd-btn hd-btn-primary" href="/#contact">
              お問い合わせ →
            </Link>
            <Link
              className="hd-btn hd-btn-accent"
              href={`/pdfs/${home.slug}`}
              target="_blank"
              rel="noopener"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              パンフレットPDF
            </Link>
            <a className="hd-btn hd-btn-ghost" href="tel:070-8319-1421">
              📞 070-8319-1421
            </a>
          </div>
        </div>
      </section>

      <footer className="hd-footer">
        <Image src="/assets/logo.jpg" alt="enjoy life" width={100} height={28} style={{ height: 28, width: "auto", display: "inline-block" }} />
        <p>株式会社 enjoy life</p>
        <p>© 2026 enjoy life Co., Ltd.</p>
        <div className="dots">
          <span style={{ background: "#5BB8D6" }} />
          <span style={{ background: "#6FBA6C" }} />
          <span style={{ background: "#F5A73F" }} />
          <span style={{ background: "#E85A8A" }} />
        </div>
      </footer>
    </div>
  );
}
