"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroImages, homes } from "../lib/data";
import PlaceholderArt from "./PlaceholderArt";

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % heroImages.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="va-hero" id="top">
      <div className="va-hero-text reveal">
        <div className="va-hero-eyebrow">
          <span className="va-dot" style={{ background: "#5BB8D6" }} />
          <span className="va-dot" style={{ background: "#6FBA6C" }} />
          <span className="va-dot" style={{ background: "#F5A73F" }} />
          <span className="va-dot" style={{ background: "#E85A8A" }} />
          <span>障がい者グループホーム</span>
        </div>
        <h1 className="va-hero-title">
          <span className="va-mark va-mark-blue">あきらめていた</span>日々を、
          <br />
          「<span className="va-mark va-mark-orange">当たり前</span>」に。
        </h1>
        <p className="va-hero-sub">
          入居したときには難しかったことが、少しずつ日常になっていく。
          <br />
          enjoy lifeは「もう一つの我が家」から、一人ひとりの歩幅で自立への一歩を支えます。
        </p>
        <div className="va-hero-ctas">
          <a href="#contact" className="va-btn va-btn-primary">
            見学のご相談 <span className="va-arrow">→</span>
          </a>
          <a href="#homes" className="va-btn va-btn-ghost">
            事業所を見る
          </a>
        </div>
        <div className="va-hero-stats">
          <div>
            <strong>4</strong>
            <span>事業所</span>
          </div>
          <div>
            <strong>14</strong>
            <span>名定員</span>
          </div>
          <div>
            <strong>2022</strong>
            <span>年設立</span>
          </div>
        </div>
        <div className="va-vacancy-board" aria-label="各事業所の空室情報">
          <div className="va-vacancy-head">
            <span className="va-vacancy-dot" />
            空室状況
          </div>
          <ul className="va-vacancy-list">
            {homes.map((h) => (
              <li key={h.slug} className={`va-vacancy-item is-${h.vacancyStatus}`}>
                <span className="va-vacancy-name" style={{ color: h.color }}>
                  {h.short}
                </span>
                <span className="va-vacancy-status">{h.vacancy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="va-hero-visual">
        <div className="va-carousel">
          {heroImages.map((img, i) => (
            <div
              key={img.label}
              className={`va-carousel-slide ${i === idx ? "active" : ""}`}
              style={{ background: img.tone }}
            >
              <PlaceholderArt tone={img.tone} label={img.label} idx={i} />
              <div className="va-carousel-caption">{img.label}</div>
            </div>
          ))}
          <div className="va-carousel-dots">
            {heroImages.map((img, i) => (
              <button
                key={img.label}
                onClick={() => setIdx(i)}
                className={i === idx ? "active" : ""}
                aria-label={`slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="va-blob va-blob-1" />
        <div className="va-blob va-blob-2" />
        <div className="va-blob va-blob-3" />
        <div className="va-hero-mascot" aria-hidden="true">
          <Image src="/assets/mascot.png" alt="" width={180} height={145} priority />
        </div>
      </div>

      <div className="va-scroll-hint">
        <span>Scroll</span>
        <div className="va-scroll-line" />
      </div>
    </section>
  );
}
