"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/assets/styles/components/landing/PerformanceChart.module.scss";
import { performanceChart } from "@/data/landing/performanceChart";

export default function PerformanceChart() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const { copy, bars } = performanceChart;

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
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${active ? styles.play : ""}`}
    >
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <div className={styles.copyBody}>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.desc}>{copy.desc}</p>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.chart}>
          <div className={styles.barCol}>
            <p className={styles.percent}>{bars.competitor.percent}</p>
            <div
              className={`${styles.bar} ${styles.barGray}`}
              style={
                { "--bar-h": bars.competitor.height } as React.CSSProperties
              }
            />
            <p className={styles.label}>{bars.competitor.label}</p>
          </div>

          <div className={styles.barColCenter}>
            <div className={styles.callout}>
              <span className={styles.calloutBubble}>{bars.own.callout}</span>
              <span className={styles.calloutArrow} />
            </div>
            <div
              className={`${styles.bar} ${styles.barBlue}`}
              style={
                { "--bar-h": bars.own.height } as React.CSSProperties
              }
            >
              <span className={styles.barPercent}>90%</span>
            </div>
            <p className={styles.label}>{bars.own.label}</p>
          </div>

          <div className={styles.barCol}>
            <p className={styles.percent}>{bars.industry.percent}</p>
            <div
              className={`${styles.bar} ${styles.barGray}`}
              style={
                { "--bar-h": bars.industry.height } as React.CSSProperties
              }
            />
            <p className={styles.label}>{bars.industry.label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
