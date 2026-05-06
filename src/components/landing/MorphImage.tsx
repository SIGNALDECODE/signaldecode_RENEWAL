"use client";

import { useEffect, useRef } from "react";
import styles from "./MorphImage.module.css";

interface Props {
  anchorSelector: string;
  endSelector: string;
}

export default function MorphImage({ anchorSelector, endSelector }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const anchor = document.querySelector<HTMLElement>(anchorSelector);
      const end = document.querySelector<HTMLElement>(endSelector);
      if (!anchor) {
        el.style.opacity = "0";
        return;
      }

      const rect = anchor.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      if (rect.top > vh) {
        el.style.opacity = "0";
        return;
      }
      if (end) {
        const eRect = end.getBoundingClientRect();
        if (eRect.bottom < 0) {
          el.style.opacity = "0";
          return;
        }
      }
      el.style.opacity = "1";

      const p = Math.max(0, Math.min(1, (vh * 0.45 - cy) / (vh * 0.7)));

      const w = Math.round(rect.width + (vw - rect.width) * p);
      const h = Math.round(rect.height + (vh - rect.height) * p);
      const tx = Math.round(cx + (vw / 2 - cx) * p - w / 2);
      const ty = Math.round(cy + (vh / 2 - cy) * p - h / 2);
      const initialRadius = rect.width / 2;
      const radius = initialRadius * (1 - p);

      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      el.style.borderRadius = `${radius}px`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [anchorSelector, endSelector]);

  return (
    <div ref={ref} className={styles.morph}>
      <img src="/images/overview.jpg" alt="" />
    </div>
  );
}
