"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/assets/styles/components/landing/ValueCards.module.scss";
import { valueCards } from "@/data/landing/valueCards";

export default function ValueCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const cards = cardsRef.current;
    if (!section || !track || !cards) return;

    let distance = 0;
    let bufferStart = 0;
    let bufferEnd = 0;
    let exitFadeRange = 0;

    const isMobile = () => window.innerWidth <= 767;

    const measure = () => {
      const vh = window.innerHeight;
      if (isMobile()) {
        bufferStart = vh * 0.1;
        bufferEnd = vh * 0.35;
        exitFadeRange = vh * 0.25;
        section.style.height = `${Math.round(vh * 1.5)}px`;
        cards.style.transform = "";
        return;
      }
      const cardsWidth = cards.scrollWidth;
      distance = Math.max(0, cardsWidth - window.innerWidth);
      bufferStart = vh * 0.25;
      bufferEnd = vh * 0.5;
      exitFadeRange = vh * 0.25;
      const totalHeight = distance + bufferStart + bufferEnd;
      section.style.height = `${Math.max(totalHeight, vh)}px`;
    };

    const update = () => {
      const sRect = section.getBoundingClientRect();
      const pinned = sRect.top <= 0 && sRect.bottom > 0;
      const exitOpacity =
        sRect.bottom < exitFadeRange
          ? Math.max(0, sRect.bottom / exitFadeRange)
          : 1;
      track.style.opacity = `${exitOpacity}`;
      section.classList.toggle(styles.pinned, pinned);
      setActive(pinned);

      if (isMobile()) return;

      const advance = -sRect.top - bufferStart;
      const progress =
        distance > 0 ? Math.max(0, Math.min(1, advance / distance)) : 0;
      cards.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };

    measure();
    update();

    let pendingFrame = false;
    const onScroll = () => {
      if (pendingFrame) return;
      pendingFrame = true;
      requestAnimationFrame(() => {
        pendingFrame = false;
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
    <section ref={sectionRef} className={styles.section} data-morph-end>
      <div ref={trackRef} className={styles.track}>
        <div
          ref={cardsRef}
          className={`${styles.cards} ${active ? styles.show : ""}`}
        >
          {valueCards.map((c) => (
            <div key={c.num} className={styles.card}>
              <p className={styles.num}>{c.num}</p>
              <div className={styles.body}>
                <div className={styles.imgBox}>
                  <img src={c.img} alt="" />
                </div>
                <div className={styles.text}>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <p className={styles.cardDesc}>{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
