"use client";

import { useEffect, useState } from "react";
import styles from "@/assets/styles/components/landing/Quotes.module.scss";
import { quotes } from "@/data/landing/quotes";

const N = quotes.length;
const ROW_REM = 11;
const START_OFFSET = 2 * N - 1;

export default function Quotes() {
  const [step, setStep] = useState(0);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => s + 1);
      setAnimated(true);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (step === N) {
      const t = setTimeout(() => {
        setAnimated(false);
        setStep(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnimated(true));
        });
      }, 700);
      return () => clearTimeout(t);
    }
  }, [step]);

  const items = [...quotes, ...quotes, ...quotes];
  const translateY = -(START_OFFSET - step) * ROW_REM;
  const middleIdx = START_OFFSET - step + 1;

  return (
    <section
      className={`${styles.section} ${!animated ? styles.noTransition : ""}`}
    >
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{
            transform: `translateY(${translateY}rem)`,
            transition: animated
              ? "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {items.map((q, i) => {
            const isMiddle = i === middleIdx;
            return (
              <div
                key={i}
                className={`${styles.row} ${
                  isMiddle ? styles.bright : styles.dim
                }`}
              >
                <p className={styles.text}>{q.left}</p>
                <span className={styles.imgBox}>
                  <img src={q.img} alt="" />
                </span>
                <p className={styles.text}>{q.right}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
