"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SalesNumbers.module.css";

const FINAL = "9999999".split("");
const N = FINAL.length;
const DURATION = 2200;

export default function SalesNumbers() {
  const [digits, setDigits] = useState<string[]>(Array(N).fill("0"));
  const sectionRef = useRef<HTMLElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const t0 = performance.now();
      let raf = 0;
      const tick = (now: number) => {
        const elapsed = now - t0;
        const next = Array.from({ length: N }, (_, pos) => {
          const rightPos = N - 1 - pos;
          const endTime = ((rightPos + 1) / N) * DURATION;
          if (elapsed >= endTime) return FINAL[pos];
          return String(Math.floor((elapsed / 55 + pos * 2) % 10));
        });
        setDigits(next);
        if (elapsed < DURATION) raf = requestAnimationFrame(tick);
        else setDigits(FINAL);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) start();
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <img
        src="/images/bitcoin1.png"
        alt=""
        className={`${styles.coin} ${styles.coinTopRight}`}
      />
      <img
        src="/images/bitcoin2.png"
        alt=""
        className={`${styles.coin} ${styles.coinBottomLeft}`}
      />
      <div className={styles.head}>
        <p className={styles.eyebrow}>SALES</p>
        <h2 className={styles.title}>우리와 함께한 기업들이 올린 추가 매출</h2>
        <p className={styles.desc}>
          단순한 수치를 넘어 실질적인 비즈니스 성장으로 증명합니다.
          <br />
          검증된 전략이 만들어낸 압도적인 성과를 직접 확인하세요.
        </p>
      </div>

      <div className={styles.numbers}>
        <span className={styles.tile}>{digits[0]}</span>
        <span className={styles.comma}>,</span>
        <span className={styles.tile}>{digits[1]}</span>
        <span className={styles.tile}>{digits[2]}</span>
        <span className={styles.tile}>{digits[3]}</span>
        <span className={styles.comma}>,</span>
        <span className={styles.tile}>{digits[4]}</span>
        <span className={styles.tile}>{digits[5]}</span>
        <span className={styles.tile}>{digits[6]}</span>
      </div>
    </section>
  );
}
