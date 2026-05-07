"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/assets/styles/components/SalesNumbers.module.scss";
import { salesNumbers } from "@/data/landing/salesNumbers";

const FINAL = salesNumbers.finalNumber.split("");
const N = FINAL.length;
const DURATION = 2200;

export default function SalesNumbers() {
  const { copy } = salesNumbers;
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

  const desc = Array.isArray(copy.desc) ? copy.desc : [copy.desc];

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h2 className={styles.title}>{copy.title}</h2>
        <p className={styles.desc}>
          {desc.map((line, i) => (
            <span key={i}>
              {line}
              {i < desc.length - 1 && <br />}
            </span>
          ))}
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
