"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/assets/styles/components/WebPortfolio.module.scss";
import { webPortfolio } from "@/data/web";

export default function WebPortfolio() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Bounds = full scrollable range (0 → scrollWidth - clientWidth) so the
  // leading and trailing padding gutters are part of the slide.
  const getBounds = () => {
    const scroller = scrollerRef.current;
    const list = listRef.current;
    if (!scroller || !list) return null;
    const first = list.querySelector<HTMLElement>("li");
    if (!first) return null;

    const min = 0;
    const max = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
    const gap = parseFloat(getComputedStyle(list).columnGap || "30") || 30;
    const step = first.getBoundingClientRect().width + gap;
    return { scroller, min, max, step };
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const b = getBounds();
      if (!b) return;
      setAtStart(el.scrollLeft <= b.min + 1);
      setAtEnd(el.scrollLeft >= b.max - 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const slide = (dir: -1 | 1) => {
    const b = getBounds();
    if (!b) return;
    const next = Math.max(b.min, Math.min(b.max, b.scroller.scrollLeft + dir * b.step));
    b.scroller.scrollTo({ left: next, behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{webPortfolio.eyebrow}</p>
        <h2 className={styles.title}>{webPortfolio.title}</h2>
        <p className={styles.desc}>{webPortfolio.desc}</p>
      </header>

      <div className={styles.scroller} ref={scrollerRef}>
        <ul className={styles.list} ref={listRef}>
          {webPortfolio.items.map((item) => (
            <li key={item.brand} className={styles.card}>
              <img src={item.image} alt={item.brand} className={styles.cardImage} />

              <div className={styles.hover} aria-hidden>
                <span className={styles.hoverInner}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                      stroke="#fff"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="3" fill="#fff" />
                  </svg>
                  <span>View More</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          aria-label="이전"
          className={styles.navBtn}
          onClick={() => slide(-1)}
          disabled={atStart}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="m15 6-6 6 6 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="다음"
          className={`${styles.navBtn} ${styles.navBtnDark}`}
          onClick={() => slide(1)}
          disabled={atEnd}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="m9 6 6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
