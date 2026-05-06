"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ValueCards.module.scss";
import { valueCards } from "@/data/landing/valueCards";

export default function ValueCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const update = () => {
      const anchor = document.querySelector<HTMLElement>("[data-morph-anchor]");
      if (!anchor) return;
      const rect = anchor.getBoundingClientRect();
      const vh = window.innerHeight;
      const cy = rect.top + rect.height / 2;
      const p = Math.max(0, Math.min(1, (vh * 0.3 - cy) / (vh * 0.65)));
      setActive(p >= 1);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} data-morph-end>
      <div className={`${styles.cards} ${active ? styles.show : ""}`}>
        {valueCards.map((c) => (
          <div key={c.num} className={styles.card}>
            <p className={styles.num}>{c.num}</p>
            <div className={styles.imgBox}>
              <img src={c.img} alt="" />
            </div>
            <div className={styles.text}>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
