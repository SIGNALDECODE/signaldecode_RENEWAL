"use client";

import { useEffect, useRef } from "react";
import styles from "./Overview.module.scss";
import { overviewCopy } from "@/data/landing/overview";

export default function Overview() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ph = phoneRef.current;
    const cp = copyRef.current;
    if (!ph || !cp) return;

    const update = () => {
      const rect = ph.getBoundingClientRect();
      const vh = window.innerHeight;
      const cy = rect.top + rect.height / 2;
      const p = Math.max(0, Math.min(1, (vh * 0.5 - cy) / (vh * 0.65)));
      cp.style.opacity = `${1 - p}`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const desc = Array.isArray(overviewCopy.desc) ? overviewCopy.desc : [overviewCopy.desc];

  return (
    <section className={styles.section}>
      <div ref={phoneRef} className={styles.phone} data-morph-anchor />
      <div ref={copyRef} className={styles.copy}>
        <p className={styles.eyebrow}>{overviewCopy.eyebrow}</p>
        <h2 className={styles.title}>{overviewCopy.title}</h2>
        <div className={styles.desc}>
          {desc.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
