"use client";

import { useEffect, useRef } from "react";
import styles from "@/assets/styles/components/landing/MorphImage.module.scss";

interface Props {
  anchorSelector: string;
  endSelector: string;
  src: string;
  /**
   * When true, the morph stays at full opacity for the entire time the end
   * element is in the viewport (no gradual 25vh exit fade) and snaps to
   * invisible the instant it leaves — no CSS transition.
   */
  disableExitFade?: boolean;
  // When true, morph progress is driven by the end-section approaching the
  // viewport top instead of the anchor's own scroll position. Use this when
  // the anchor element is pinned via position:sticky and therefore cannot
  // serve as a moving threshold.
  stickyMode?: boolean;
  /**
   * When true, the component will not hijack the scroll to auto-advance to
   * the end element when the user crosses the anchor entry threshold.
   * Use on pages where you want pure user-driven scrolling.
   */
  disableAutoScroll?: boolean;
}

export default function MorphImage({
  anchorSelector,
  endSelector,
  src,
  disableExitFade = false,
  stickyMode = false,
  disableAutoScroll = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (disableExitFade) {
      // Skip the default 0.3s opacity transition so on/off is a hard cut.
      el.style.transition = "none";
    }

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
      const exitOpacity = disableExitFade
        ? 1
        : eRect && eRect.bottom < exitFadeRange
          ? Math.max(0, eRect.bottom / exitFadeRange)
          : 1;
      el.style.opacity = `${exitOpacity}`;

      const isSettled = eRect ? eRect.top <= 0 : false;
      let p: number;
      if (stickyMode && eRect) {
        // Sticky anchor stays fixed in viewport, so derive progress from the
        // end-section approaching the viewport top: p=0 when its top is one
        // viewport away, p=1 when it reaches the top.
        p = Math.max(0, Math.min(1, (vh - eRect.top) / vh));
      } else {
        const ENTRY_BUFFER = vh * 0.2;
        const startY = window.scrollY + cy - vh * 0.45 + ENTRY_BUFFER;
        const endY = eRect
          ? window.scrollY + eRect.top
          : window.scrollY + cy + vh * 0.25;
        p = Math.max(
          0,
          Math.min(1, (window.scrollY - startY) / (endY - startY)),
        );
      }

      if (
        !disableAutoScroll &&
        !isAnimating &&
        lastP <= 0 &&
        p > 0 &&
        !isSettled
      ) {
        const absAnchorCenter = window.scrollY + cy;
        const targetY = eRect
          ? window.scrollY + eRect.top
          : absAnchorCenter + vh * 0.25;
        triggerAutoScroll(targetY);
      }
      lastP = p;

      const w = Math.round(rect.width + (vw - rect.width) * p);
      let h = Math.round(rect.height + (vh - rect.height) * p);
      const tx = Math.round(cx + (vw / 2 - cx) * p - w / 2);
      let ty = Math.round(cy + (vh / 2 - cy) * p - h / 2);

      // With disableExitFade, once the morph has settled (p>=1) clamp its
      // bottom to the end element's bottom so the dark band cuts off cleanly
      // with the section instead of painting full-viewport past the section.
      if (disableExitFade && eRect && p >= 1) {
        h = Math.max(0, Math.min(h, Math.round(eRect.bottom)));
        ty = 0;
      }
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
  }, [anchorSelector, endSelector, disableExitFade, stickyMode, disableAutoScroll]);

  return (
    <div ref={ref} className={styles.morph}>
      <img src={src} alt="" />
    </div>
  );
}
