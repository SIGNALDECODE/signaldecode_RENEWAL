"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/assets/styles/components/landing/PhoneSlider.module.scss";
import { phoneSlider } from "@/data/landing/phoneSlider";
import type { PhoneSliderModeKey } from "@/types/landing";

const DRAG_STEP = 240;

const KF = [
  { tx: 0, tz: 0, ry: 0, sc: 1, op: 1, br: 1, bl: 0, zi: 10 },
  { tx: 34, tz: 0, ry: 45, sc: 0.92, op: 1, br: 1, bl: 0, zi: 8 },
  { tx: 16, tz: -36, ry: -20, sc: 0.7, op: 0.78, br: 0.72, bl: 0.5, zi: 5 },
  { tx: 9, tz: -56, ry: -14, sc: 0.45, op: 0.5, br: 0.58, bl: 1.5, zi: 3 },
  { tx: 3, tz: -76, ry: -8, sc: 0.32, op: 0.3, br: 0.45, bl: 2, zi: 1 },
] as const;

type KFKey = keyof (typeof KF)[number];

function lerp(d: number, key: KFKey) {
  const a = Math.min(Math.abs(d), 4);
  const lo = Math.floor(a);
  const hi = Math.min(lo + 1, 4);
  const t = a - lo;
  return KF[lo][key] + (KF[hi][key] - KF[lo][key]) * t;
}

function originX(d: number) {
  const a = Math.abs(d);
  if (a >= 2 || d === 0) return 50;
  if (d > 0) return d <= 1 ? 50 - 50 * d : 50 * (d - 1);
  const ad = -d;
  return ad <= 1 ? 50 + 50 * ad : 100 - 50 * (ad - 1);
}

function cardStyle(d: number, smooth: boolean): React.CSSProperties {
  const s = d < 0 ? -1 : 1;
  return {
    transform: `translate3d(${s * lerp(d, "tx")}rem, 0, ${lerp(
      d,
      "tz"
    )}rem) rotateY(${s * lerp(d, "ry")}deg) scale(${lerp(d, "sc")})`,
    transformOrigin: `${originX(d)}% 50%`,
    opacity: lerp(d, "op"),
    filter: `brightness(${lerp(d, "br")}) blur(${lerp(d, "bl")}px)`,
    zIndex: Math.round(lerp(d, "zi")),
    transition: smooth ? undefined : "none",
  };
}

export default function PhoneSlider() {
  const router = useRouter();
  const { copy, toggle, slides, more } = phoneSlider;
  const [index, setIndex] = useState(2);
  const [mode, setMode] = useState<PhoneSliderModeKey>("dev");
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const startX = useRef(0);
  const accumShift = useRef(0);
  const moved = useRef(false);
  const activeSlides = slides[mode];
  const len = activeSlides.length;

  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
    accumShift.current = 0;
    moved.current = false;
    setDragging(true);
    setDragX(0);
    // Don't capture the pointer yet — capturing on pointerdown causes the
    // stage to swallow click events on the inner card so links never fire.
    // We promote to a real drag (and capture) only once the pointer travels
    // past the 4px threshold below.
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const dx = e.clientX - startX.current;
    if (!moved.current && Math.abs(dx) > 4) {
      moved.current = true;
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Pointer may already be released / unsupported — safe to ignore.
      }
    }
    if (!moved.current) return;
    const total = Math.round(dx / DRAG_STEP);
    const delta = total - accumShift.current;
    if (delta !== 0) {
      accumShift.current = total;
      setIndex((i) => (((i - delta) % len) + len) % len);
    }
    setDragX(dx - total * DRAG_STEP);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    if (moved.current && e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    setDragging(false);
    setDragX(0);
  };

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

        <div
          className={styles.stage}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {activeSlides.flatMap((slide, i) => {
            const frac = dragX / DRAG_STEP;
            const d = offsetOf(i);
            const dBack = d > 0 ? d - len : d < 0 ? d + len : null;
            const positions: { d: number; key: string }[] = [];
            if (Math.abs(d) <= 2) positions.push({ d, key: `f-${i}` });
            if (dBack !== null && Math.abs(dBack) <= 4)
              positions.push({ d: dBack, key: `b-${i}` });
            return positions.map(({ d, key }) => {
              const dCont = d + frac;
              const isActive = i === index;
              return (
                <div
                  key={key}
                  className={`${styles.card} ${
                    mode === "dev" ? styles.cardDev : ""
                  }`}
                  style={cardStyle(dCont, !dragging)}
                  onClick={() => {
                    if (moved.current) return;
                    if (isActive && slide.href) router.push(slide.href);
                    else setIndex(i);
                  }}
                >
                  <img src={slide.src} alt="" draggable={false} />
                </div>
              );
            });
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

      {/* <button className={styles.more}>{more}</button> */}
    </section>
  );
}
