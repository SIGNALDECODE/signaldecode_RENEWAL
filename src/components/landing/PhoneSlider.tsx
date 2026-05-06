"use client";

import { useState } from "react";
import styles from "./PhoneSlider.module.scss";
import { phoneSlider } from "@/data/landing/phoneSlider";
import type { PhoneSliderModeKey } from "@/types/landing";

export default function PhoneSlider() {
  const { copy, toggle, slides, more } = phoneSlider;
  const [index, setIndex] = useState(2);
  const [mode, setMode] = useState<PhoneSliderModeKey>("dev");
  const len = slides.length;

  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);

  const offsetOf = (i: number) => {
    let d = i - index;
    if (d > len / 2) d -= len;
    if (d < -len / 2) d += len;
    return d;
  };

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h2 className={styles.title}>{copy.title}</h2>
        <p className={styles.desc}>{copy.desc}</p>
      </div>

      <div className={styles.toggle}>
        <span
          className={
            mode === "marketing" ? styles.toggleActive : styles.toggleInactive
          }
          onClick={() => setMode("marketing")}
        >
          {toggle.marketing}
        </span>
        <button
          className={`${styles.switch} ${
            mode === "marketing" ? styles.switchLeft : ""
          }`}
          onClick={() =>
            setMode((m) => (m === "marketing" ? "dev" : "marketing"))
          }
          aria-label="toggle"
        >
          <span className={styles.knob} />
        </button>
        <span
          className={
            mode === "dev" ? styles.toggleActive : styles.toggleInactive
          }
          onClick={() => setMode("dev")}
        >
          {toggle.dev}
        </span>
      </div>

      <div className={styles.slider}>
        <button
          className={`${styles.arrow} ${styles.arrowLight}`}
          onClick={prev}
          aria-label="prev"
        >
          ‹
        </button>

        <div className={styles.stage}>
          {slides.flatMap((src, i) => {
            const d = offsetOf(i);
            const dBack = d > 0 ? d - len : d < 0 ? d + len : null;
            const positions: { d: number; key: string }[] = [];
            if (Math.abs(d) <= 2) positions.push({ d, key: `f-${i}` });
            if (dBack !== null && Math.abs(dBack) <= 4)
              positions.push({ d: dBack, key: `b-${i}` });
            return positions.map(({ d, key }) => (
              <div
                key={key}
                className={styles.card}
                data-pos={d}
                onClick={() => setIndex(i)}
              >
                <img src={src} alt="" />
              </div>
            ));
          })}
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowDark}`}
          onClick={next}
          aria-label="next"
        >
          ›
        </button>
      </div>

      <button className={styles.more}>{more}</button>
    </section>
  );
}
