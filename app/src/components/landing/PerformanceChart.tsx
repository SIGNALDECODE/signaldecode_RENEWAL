"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PerformanceChart.module.css";

export default function PerformanceChart() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${active ? styles.play : ""}`}
    >
      <div className={styles.panel}>
        <div className={styles.chart}>
          <div className={styles.barCol}>
            <p className={styles.percent}>55%</p>
            <div className={`${styles.bar} ${styles.barGray}`} style={{ height: "9rem" }} />
            <p className={styles.label}>기존전략</p>
          </div>

          <div className={styles.barColCenter}>
            <div className={styles.callout}>
              <span className={styles.calloutBubble}>압도적인 켐페인 퍼포먼스</span>
              <span className={styles.calloutArrow} />
            </div>
            <div className={`${styles.bar} ${styles.barBlue}`} style={{ height: "20rem" }} />
            <p className={styles.label}>당사 전략</p>
          </div>

          <div className={styles.barCol}>
            <p className={styles.percent}>75%</p>
            <div className={`${styles.bar} ${styles.barGray}`} style={{ height: "12rem" }} />
            <p className={styles.label}>타사 평균</p>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        <p className={styles.eyebrow}>VALUE</p>
        <h2 className={styles.title}>
          수치로 증명하는 압도적인<br />캠페인 퍼포먼스
        </h2>
        <p className={styles.desc}>
          단순한 광고 집행을 넘어, 실시간 데이터 분석을 통해 타사 대비 월등한
          전환율(CVR)을 기록합니다. <br />
          최적의 효율을 찾아내는 그로스 해킹 전략으로 귀사의 매출 곡선을
          가파르게 상승시켜 보세요.
        </p>
      </div>
    </section>
  );
}
