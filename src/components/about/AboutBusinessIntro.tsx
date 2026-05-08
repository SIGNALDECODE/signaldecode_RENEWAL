"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/assets/styles/components/AboutBusinessIntro.module.scss";
import { aboutBusinessIntro } from "@/data/about";

export default function AboutBusinessIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let exitFadeRange = 0;

    const measure = () => {
      const vh = window.innerHeight;
      exitFadeRange = vh * 0.25;
      // Section is just scroll space — height controls how long the pinned
      // track stays in the viewport. Tune this to taste.
      section.style.height = `${vh * 1.4}px`;
    };

    const update = () => {
      const sRect = section.getBoundingClientRect();
      const pinned = sRect.top <= 0 && sRect.bottom > 0;
      // Exit fade — as the section's bottom approaches the viewport top,
      // fade the entire track so it disappears together with the morph image.
      const exitOpacity =
        sRect.bottom < exitFadeRange
          ? Math.max(0, sRect.bottom / exitFadeRange)
          : 1;
      track.style.opacity = `${exitOpacity}`;
      section.classList.toggle(styles.pinned, pinned);
      setActive(pinned);
    };

    measure();
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
    const onResize = () => {
      measure();
      update();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      data-morph-end
    >
      <div ref={trackRef} className={styles.track}>
        <div className={`${styles.content} ${active ? styles.show : ""}`}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>{aboutBusinessIntro.eyebrow}</p>
            <h2 className={styles.title}>{aboutBusinessIntro.title}</h2>
          </header>

          <div className={styles.group}>
            {aboutBusinessIntro.cards.map((c, i) => (
              <div
                key={c.num}
                className={styles.card}
                data-index={i}
                style={
                  { ["--card-i" as string]: String(i) } as React.CSSProperties
                }
              >
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
        </div>
      </div>
    </section>
  );
}
