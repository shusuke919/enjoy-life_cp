"use client";

import { useEffect, useState } from "react";
import { heroImages } from "../lib/data";
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
          <span>障害者グループホーム</span>
        </div>
        <h1 className="va-hero-title">
          あなたの<span className="va-mark va-mark-blue">「やってみたい」</span>が
          <br />
          ここから<span className="va-mark va-mark-orange">はじまる</span>。
        </h1>
        <p className="va-hero-sub">
          私たち株式会社enjoy lifeは、障害のある方が自分らしく、
          <br className="va-br-pc" />
          安心して暮らせる&ldquo;もう一つの我が家&rdquo;をつくっています。
        </p>
        <div className="va-hero-ctas">
          <a href="#contact" className="va-btn va-btn-primary">
            入居のご相談 <span className="va-arrow">→</span>
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
            <strong>24</strong>
            <span>名定員</span>
          </div>
          <div>
            <strong>2018</strong>
            <span>年設立</span>
          </div>
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
      </div>

      <div className="va-scroll-hint">
        <span>Scroll</span>
        <div className="va-scroll-line" />
      </div>
    </section>
  );
}
