"use client";

import Image from "next/image";
import { useState } from "react";
import { navItems } from "../lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="va-header">
      <a href="#top" className="va-logo" aria-label="enjoy life">
        <Image src="/assets/logo.jpg" alt="enjoy life" width={160} height={34} priority style={{ height: 34, width: "auto" }} />
      </a>
      <nav className="va-nav">
        {navItems.map((n) => (
          <a key={n.id} href={`#${n.id}`}>
            {n.label}
          </a>
        ))}
        <a href="#contact" className="va-nav-cta">
          お問い合わせ
        </a>
      </nav>
      <button
        className="va-burger"
        onClick={() => setOpen((v) => !v)}
        aria-label="メニュー"
        aria-expanded={open}
      >
        <span style={{ transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
        <span style={{ opacity: open ? 0 : 1 }} />
        <span style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
      </button>
      {open && (
        <div className="va-mobile-menu">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
