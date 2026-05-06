"use client";

import { useEffect, useState } from "react";
import styles from "./Partners.module.scss";
import { partners } from "@/data/landing/partners";

const { copy, cards: items } = partners;
const N = items.length;
const trackItems = [...items, ...items, ...items];

export default function Partners() {
  const [index, setIndex] = useState(N);
  const [animated, setAnimated] = useState(true);

  const prev = () => {
    setAnimated(true);
    setIndex((i) => i - 1);
  };
  const next = () => {
    setAnimated(true);
    setIndex((i) => i + 1);
  };

  useEffect(() => {
    if (index < N || index >= 2 * N) {
      const t = setTimeout(() => {
        setAnimated(false);
        setIndex((i) => (i < N ? i + N : i - N));
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnimated(true));
        });
      }, 500);
      return () => clearTimeout(t);
    }
  }, [index]);

  const desc = Array.isArray(copy.desc) ? copy.desc : [copy.desc];

  return (
    <section className={`${styles.section} ${!animated ? styles.noTransition : ""}`}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h2 className={styles.title}>{copy.title}</h2>
        <div className={styles.desc}>
          {desc.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(calc(-0.5 * var(--card-w) - ${index} * (var(--card-w) + var(--gap))))`,
          }}
        >
          {trackItems.map((item, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.thumb}>
                <img src={item.logo} alt="" className={styles.logo} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.tags}>
                  {item.tags.map((t, k) => (
                    <span key={k}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.arrows}>
        <button
          className={`${styles.arrow} ${styles.arrowLight}`}
          onClick={prev}
          aria-label="prev"
        >
          ‹
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowDark}`}
          onClick={next}
          aria-label="next"
        >
          ›
        </button>
      </div>
    </section>
  );
}
