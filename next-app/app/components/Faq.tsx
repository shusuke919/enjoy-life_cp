"use client";

import { useState } from "react";
import { faqs } from "../lib/data";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="va-section va-faq" id="faq">
      <div className="va-section-head reveal">
        <div className="va-section-label">
          <span style={{ background: "#F5A73F" }} /> FAQ
        </div>
        <h2 className="va-section-title">よくある質問</h2>
      </div>
      <div className="va-faq-list">
        {faqs.map((f, i) => (
          // data-open (not a class) keeps React's className stable, so the
          // is-visible class added by Reveal's IntersectionObserver isn't
          // wiped on re-render. CSS targets `.va-faq-item[data-open="true"]`.
          <div
            key={f.q}
            className="va-faq-item reveal"
            data-open={open === i ? "true" : "false"}
          >
            <button
              type="button"
              className="va-faq-q"
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
            >
              <span className="va-faq-mark">Q</span>
              <span className="va-faq-qtxt">{f.q}</span>
              <span className="va-faq-toggle">{open === i ? "−" : "+"}</span>
            </button>
            <div className="va-faq-a">
              <span className="va-faq-mark va-faq-mark-a">A</span>
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
