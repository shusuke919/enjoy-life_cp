"use client";

import { useEffect } from "react";

/**
 * Mounts a single IntersectionObserver that adds `is-visible` to every
 * element with class `reveal` once it enters the viewport. This mirrors the
 * design's original document-level observer behaviour without requiring
 * each section to manage its own ref.
 */
export default function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
