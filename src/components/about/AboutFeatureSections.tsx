"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/assets/styles/components/about/AboutFeatureSections.module.scss";
import { aboutFeatureSections } from "@/data/about";

// 페이즈 경계값 (wrap 컨테이너 내부 스크롤의 vh 단위).
//   • scroll 172vh — 마지막 섹션(Web Dev)이 sticky 잠금 도달 (자동)
//   • 178 → 215  : Web Dev 의 카피가 peek 위치로 말려 올라감 (모든
//                  3개 섹션이 라벨만 보이는 peek 상태)
//   • 215 → 240  : 3단 스택 전체가 축소 — "폴더 압축"
//   • 240 → 270  : opacity 가 0 으로 fade — 스택이 닫히며 사라짐
//
// 중요한 제약: COMPRESS_END 는 마지막 섹션의 sticky 종료 지점보다 작아야
// 함. Web Dev sticky 종료 = 172 + ::after(vh). ::after = 70vh 일 때
// sticky 종료 = 242 → COMPRESS_END 240 이 그 안에 들어감 → compress
// 진행 중에는 모든 섹션이 제자리 sticky 유지 (Marketing/Video peek
// 가 가려지지 않음).
const STABLE_END_VH = 178;
const RECEDE_END_VH = 215;
const COMPRESS_END_VH = 240;
const FADE_END_VH = 270;

const clamp = (n: number) => Math.max(0, Math.min(1, n));
const easeOutCubic = (n: number) => 1 - Math.pow(1 - n, 3);
const easeInOutQuad = (n: number) =>
  n < 0.5 ? 2 * n * n : 1 - Math.pow(-2 * n + 2, 2) / 2;
const easeInCubic = (n: number) => n * n * n;

export default function AboutFeatureSections() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const items = () =>
      sectionsRef.current.filter((el): el is HTMLElement => el !== null);

    let raf = 0;
    const update = () => {
      const list = items();
      const wrap = wrapRef.current;
      if (!wrap) return;

      const vh = window.innerHeight / 100;
      const wrapY = wrap.getBoundingClientRect().top + window.scrollY;
      const scrollInWrapVh = (window.scrollY - wrapY) / vh;

      // post-stable 페이즈 진행률 계산.
      const webDevRecedeRaw = clamp(
        (scrollInWrapVh - STABLE_END_VH) /
          (RECEDE_END_VH - STABLE_END_VH),
      );
      const compressRaw = clamp(
        (scrollInWrapVh - RECEDE_END_VH) /
          (COMPRESS_END_VH - RECEDE_END_VH),
      );
      const fadeRaw = clamp(
        (scrollInWrapVh - COMPRESS_END_VH) /
          (FADE_END_VH - COMPRESS_END_VH),
      );

      // compress 는 ease-in-out — 시작/끝이 부드럽고 중간이 매끄러움.
      // fade 는 ease-in — 끝으로 갈수록 빨라져 카드들이 미끄러지듯 사라짐.
      wrap.style.setProperty("--compress", easeInOutQuad(compressRaw).toFixed(4));
      wrap.style.setProperty("--fade", easeInCubic(fadeRaw).toFixed(4));

      list.forEach((section, i) => {
        const next = list[i + 1];

        if (next) {
          // 다음 섹션이 자기 sticky 잠금에 얼마나 접근했는지 기반으로
          // recede 진행률 계산 (ease-out cubic). 다음 섹션이 위로 올라
          // 오는 만큼 현재 섹션은 peek 상태로 말려 올라감.
          const nextRect = next.getBoundingClientRect();
          const nextStickyTopPx = parseFloat(
            getComputedStyle(next).top || "0",
          );
          const triggerStartPx = window.innerHeight;
          const range = triggerStartPx - nextStickyTopPx;
          const distance = triggerStartPx - nextRect.top;
          const raw = range > 0 ? clamp(distance / range) : 0;
          section.style.setProperty("--recede", easeOutCubic(raw).toFixed(4));
        } else {
          // 마지막 섹션은 자신을 덮을 다음 카드가 없으므로 위에서
          // 계산한 스크롤 기반 webDevRecede 를 직접 사용.
          section.style.setProperty(
            "--recede",
            easeOutCubic(webDevRecedeRaw).toFixed(4),
          );
        }
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      {aboutFeatureSections.map((s, i) => (
        <section
          key={s.eyebrow}
          className={styles.section}
          ref={(el) => {
            sectionsRef.current[i] = el;
          }}
        >
          {/* `.frame` 만 compress 때 스케일됨. bg 이미지 + scrim 이
              내부에 있어 함께 축소. `.copy` 는 frame 외부에 위치 →
              섹션 위에 떠 있되 텍스트 크기는 항상 원본 유지. */}
          <div className={styles.frame}>
            <Image
              src={s.bg}
              alt=""
              fill
              sizes="100vw"
              className={styles.bg}
              priority={i === 0}
            />
            <div className={styles.scrim} aria-hidden="true" />
          </div>

          <div className={styles.copy}>
            <div className={styles.head}>
              <div className={styles.eyebrowRow}>
                <Image
                  src={s.icon}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                <p className={styles.eyebrow}>{s.eyebrow}</p>
              </div>
              <h2 className={styles.title}>{s.title}</h2>
            </div>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
