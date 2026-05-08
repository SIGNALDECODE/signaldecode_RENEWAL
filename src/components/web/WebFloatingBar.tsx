"use client";

import { useEffect, useState } from "react";
import styles from "@/assets/styles/components/WebFloatingBar.module.scss";

export default function WebFloatingBar() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className={styles.bar} aria-label="플로팅 메뉴">
      <a
        href="#contact"
        className={`${styles.pill} ${styles.pillContact}`}
        aria-label="상담"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M3.33 5.83A2.5 2.5 0 0 1 5.83 3.33h8.34a2.5 2.5 0 0 1 2.5 2.5v6.67a2.5 2.5 0 0 1-2.5 2.5H8.33L4.17 17.5v-2.5h-.83A2.5 2.5 0 0 1 .83 12.5"
            stroke="#fff"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(1.67 0)"
          />
        </svg>
        <span>상담</span>
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${styles.pill} ${styles.pillTop} ${showTop ? styles.pillVisible : ""}`}
        aria-label="맨 위로"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M10 16V4m0 0-5 5m5-5 5 5"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>TOP</span>
      </button>
    </aside>
  );
}
