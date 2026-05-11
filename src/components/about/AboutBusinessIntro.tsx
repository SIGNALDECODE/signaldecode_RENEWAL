"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/assets/styles/components/about/AboutBusinessIntro.module.scss";
import { aboutBusinessIntro, aboutDivider } from "@/data/about";

export default function AboutBusinessIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Mirror landing/Overview→ValueCards transition: once the section's
    // top crosses the viewport top (= morph image at p=1), reveal the
    // entire content (header + cards + line + marquee) at once.
    const update = () => {
      const sRect = section.getBoundingClientRect();
      setActive(sRect.top <= 0 && sRect.bottom > 0);
    };

    update();
    let pending = false;
    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        update();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} data-morph-end>
      <div className={styles.bg} aria-hidden="true" />

      <div className={`${styles.inner} ${active ? styles.show : ""}`}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{aboutBusinessIntro.eyebrow}</p>
          <h2 className={styles.title}>{aboutBusinessIntro.title}</h2>
        </header>

        <div className={styles.group}>
          {aboutBusinessIntro.cards.map((c, i) => (
            <div key={c.num} className={styles.card} data-index={i}>
              <div className={styles.content_inner}>
                <div className={styles.titleRow}>
                  <span className={styles.word}>{c.title}</span>
                  <span className={styles.num}>{c.num}</span>
                </div>
                <p className={styles.desc}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.post}>
          <div className={styles.line} aria-hidden="true" />
          <div
            className={styles.marquee}
            role="img"
            aria-label={aboutDivider.marqueeText}
          >
            <div className={styles.marqueeTrack} aria-hidden="true">
              <span className={styles.marqueeText}>
                {aboutDivider.marqueeText}
              </span>
              <span className={styles.marqueeText}>
                {aboutDivider.marqueeText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
