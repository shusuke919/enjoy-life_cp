"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useState } from "react";
import { homes } from "../lib/data";
import { homeDetails } from "../lib/homeDetails";
import PlaceholderArt from "./PlaceholderArt";

export default function Homes() {
  const [active, setActive] = useState(0);
  const home = homes[active];
  const detail = homeDetails[home.slug];

  return (
    <section className="va-section va-homes" id="homes">
      <div className="va-section-head reveal">
        <div className="va-section-label">
          <span style={{ background: "#F5A73F" }} /> Our homes
        </div>
        <h2 className="va-section-title">4つの事業所</h2>
        <p className="va-section-sub">
          大阪府八尾市内にて、4つのホームを展開しています（うち1拠点は2026年開設予定）。
        </p>
      </div>

      <div className="va-homes-tabs">
        {homes.map((h, i) => (
          <button
            key={h.slug}
            type="button"
            className={`va-home-tab ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            style={{ ["--accent" as string]: h.color } as CSSProperties}
          >
            <span className="va-home-tab-idx">0{i + 1}</span>
            <span className="va-home-tab-name">{h.short}</span>
          </button>
        ))}
      </div>

      {/* Detailed panel for active home */}
      <div className="va-home-panel reveal" style={{ ["--accent" as string]: home.color } as CSSProperties}>
        <div className="va-home-visual">
          <PlaceholderArt tone={home.color + "33"} label="外観イメージ" idx={active} />
          <div className="va-home-badge" style={{ background: home.color }}>
            0{active + 1}
          </div>
        </div>
        <div className="va-home-info">
          <div className="va-home-area">{home.area}</div>
          <h3 className="va-home-name">{home.name}</h3>
          <dl className="va-home-dl">
            <div>
              <dt>定員</dt>
              <dd>{home.rooms}</dd>
            </div>
            <div>
              <dt>所在地</dt>
              <dd>{detail.fullAddress}</dd>
            </div>
          </dl>
          <div className="va-home-features">
            {home.features.map((f) => (
              <span key={f} style={{ borderColor: home.color, color: home.color }}>
                {f}
              </span>
            ))}
          </div>
          <div className="va-home-cta-row">
            <Link
              href={`/homes/${home.slug}`}
              className="va-btn va-btn-primary"
              style={{ background: home.color }}
            >
              詳細を見る <span className="va-arrow">→</span>
            </Link>
            <Link
              href={`/pdfs/${home.slug}`}
              target="_blank"
              rel="noopener"
              className="va-btn va-btn-ghost"
              style={{ borderColor: home.color, color: home.color }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: 6 }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              パンフレットPDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
