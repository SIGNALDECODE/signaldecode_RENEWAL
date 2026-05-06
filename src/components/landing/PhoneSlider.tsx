"use client";

import { useState } from "react";
import styles from "./PhoneSlider.module.css";

const slides = [
  "/images/slider1.png",
  "/images/slider2.jpg",
  "/images/slider3.png",
  "/images/slider4.jpg",
  "/images/slider5.png",
];

export default function PhoneSlider() {
  const [index, setIndex] = useState(2);
  const [mode, setMode] = useState<"marketing" | "dev">("dev");
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
        <p className={styles.eyebrow}>SUB TITLE</p>
        <h2 className={styles.title}>성공의 기록이 곧 우리의 실력입니다.</h2>
        <p className={styles.desc}>
          막연한 제안이 아닌, 실제 수치로 증명된 프로젝트들입니다. 다양한 업종의
          한계를 넘어서며 만들어낸 <br />
          시그널디코드만의 압도적인 퍼포먼스를 확인해 보세요.
        </p>
      </div>

      <div className={styles.toggle}>
        <span
          className={
            mode === "marketing" ? styles.toggleActive : styles.toggleInactive
          }
          onClick={() => setMode("marketing")}
        >
          마케팅
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
          웹·개발
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

      <button className={styles.more}>더 보러가기</button>
    </section>
  );
}
