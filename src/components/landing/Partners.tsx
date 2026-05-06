"use client";

import { useEffect, useState } from "react";
import styles from "./Partners.module.css";

const logos = ["/icons/eumfood_logo.png", "/images/stancegym_logo.png"];

const items = Array.from({ length: 12 }).map((_, i) => ({
  title: "타이틀",
  desc: "서브타이서브타이틀서브타이틀서브타이틀서서브타이틀서브타이틀브타이틀틀",
  tags: ["#키워드", "#키워드"],
  logo: logos[i % logos.length],
}));

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

  return (
    <section className={`${styles.section} ${!animated ? styles.noTransition : ""}`}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>SUB TITLE</p>
        <h2 className={styles.title}>최고의 선택, 결과로 증명하는 파트너사</h2>
        <div className={styles.desc}>
          <p>단순한 협력을 넘어 파트너사의 성장을 최우선으로 생각합니다.</p>
          <p>
            이미 수많은 기업이 시그널디코드와 함께하며 시장에서의 독보적인
            성과를 경험하고 있습니다.
          </p>
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
