"use client";

import { useEffect, useRef } from "react";
import styles from "@/assets/styles/components/MorphImage.module.scss";

interface Props {
  anchorSelector: string;
  endSelector: string;
  src: string;
}

export default function MorphImage({ anchorSelector, endSelector, src }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let lastP = 0;
    let isAnimating = false;
    let rafId: number | null = null;

    const AUTO_SCROLL_MS = 1900;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const cancelAnim = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      isAnimating = false;
    };

    const triggerAutoScroll = (targetY: number) => {
      cancelAnim();
      isAnimating = true;
      const startY = window.scrollY;
      const delta = targetY - startY;
      const startTime = performance.now();

      const step = (now: number) => {
        const t = Math.min(1, (now - startTime) / AUTO_SCROLL_MS);
        window.scrollTo(0, startY + delta * easeOutCubic(t));
        if (t < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          rafId = null;
          isAnimating = false;
        }
      };
      rafId = requestAnimationFrame(step);
    };

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
        lastP = 0;
        return;
      }
      const eRect = end ? end.getBoundingClientRect() : null;
      if (eRect && eRect.bottom < 0) {
        el.style.opacity = "0";
        lastP = 1;
        return;
      }

      const exitFadeRange = vh * 0.25;
      const exitOpacity =
        eRect && eRect.bottom < exitFadeRange
          ? Math.max(0, eRect.bottom / exitFadeRange)
          : 1;
      el.style.opacity = `${exitOpacity}`;

      const isSettled = eRect ? eRect.top <= 0 : false;
      const ENTRY_BUFFER = vh * 0.2;
      const startY = window.scrollY + cy - vh * 0.45 + ENTRY_BUFFER;
      const endY = eRect
        ? window.scrollY + eRect.top
        : window.scrollY + cy + vh * 0.25;
      const p = Math.max(
        0,
        Math.min(1, (window.scrollY - startY) / (endY - startY)),
      );

      if (!isAnimating && lastP <= 0 && p > 0 && !isSettled) {
        const absAnchorCenter = window.scrollY + cy;
        const targetY = eRect
          ? window.scrollY + eRect.top
          : absAnchorCenter + vh * 0.25;
        triggerAutoScroll(targetY);
      }
      lastP = p;

      const w = Math.round(rect.width + (vw - rect.width) * p);
      const h = Math.round(rect.height + (vh - rect.height) * p);
      const tx = Math.round(cx + (vw / 2 - cx) * p - w / 2);
      const ty = Math.round(cy + (vh / 2 - cy) * p - h / 2);
      // If the anchor has its own non-zero border-radius (e.g. a small 8px
      // rounded rect), respect that as the morph's starting radius. Otherwise
      // fall back to a circular start (rect.width / 2) — matches the original
      // landing-page behavior for square-ish anchors.
      const cssRadius = parseFloat(
        window.getComputedStyle(anchor).borderTopLeftRadius,
      );
      const initialRadius =
        Number.isFinite(cssRadius) && cssRadius > 0
          ? cssRadius
          : rect.width / 2;
      const radius = initialRadius * (1 - p);

      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      el.style.borderRadius = `${radius}px`;
    };

    let pendingFrame = false;
    const onScroll = () => {
      if (pendingFrame) return;
      pendingFrame = true;
      requestAnimationFrame(() => {
        pendingFrame = false;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      cancelAnim();
    };
  }, [anchorSelector, endSelector]);

  return (
    <div ref={ref} className={styles.morph}>
      <img src={src} alt="" />
    </div>
  );
}
