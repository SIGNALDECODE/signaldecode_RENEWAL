"use client";

import { useState } from "react";
import styles from "@/assets/styles/components/landing/Partners.module.scss";
import { partners } from "@/data/landing/partners";

const PER_PAGE = 8;

export default function Partners() {
  const { copy, cards } = partners;
  const totalPages = Math.max(1, Math.ceil(cards.length / PER_PAGE));
  const [page, setPage] = useState(0);
  const start = page * PER_PAGE;
  const visible = cards.slice(start, start + PER_PAGE);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <div className={styles.headBody}>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.desc}>{copy.desc}</p>
        </div>
      </div>

      <ul className={styles.grid}>
        {visible.map((card) => (
          <li key={card.title} className={styles.card}>
            <div className={styles.thumb}>
              {card.logo ? (
                <img
                  src={card.logo}
                  alt={card.title}
                  className={styles.logo}
                />
              ) : (
                <span className={styles.logoFallback}>{card.title}</span>
              )}
            </div>
            <div className={styles.body}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
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
      )}
    </section>
  );
}
