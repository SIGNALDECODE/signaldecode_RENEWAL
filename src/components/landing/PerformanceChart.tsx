"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PerformanceChart.module.scss";
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
            <p className={styles.percent}>{bars.competitor.percent}</p>
            <div
              className={`${styles.bar} ${styles.barGray}`}
              style={{ height: bars.competitor.height }}
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
              style={{ height: bars.own.height }}
            />
            <p className={styles.label}>{bars.own.label}</p>
          </div>

          <div className={styles.barCol}>
            <p className={styles.percent}>{bars.industry.percent}</p>
            <div
              className={`${styles.bar} ${styles.barGray}`}
              style={{ height: bars.industry.height }}
            />
            <p className={styles.label}>{bars.industry.label}</p>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h2 className={styles.title}>{copy.title}</h2>
        <p className={styles.desc}>{copy.desc}</p>
      </div>
    </section>
  );
}
