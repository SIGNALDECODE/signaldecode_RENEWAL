"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./ChannelMenu.module.scss";
import { CHANNELS, type ChannelKey } from "@/data/channels";

type Props = {
  current: ChannelKey;
  currentLabel: string;
};

export default function ChannelMenu({ current, currentLabel }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.wrap}>
      <div className={styles.pill} ref={ref}>
        <span className={styles.label}>Marketing Service</span>
        <span className={styles.divider} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <button
          type="button"
          className={styles.current}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label="채널 선택"
        >
          <span className={styles.currentLabel}>{currentLabel}</span>
          <span className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}>
            <svg viewBox="0 0 24 24">
              <path d="M6 9h12L12 17z" fill="currentColor" />
            </svg>
          </span>
        </button>
        <div
          className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
          role="listbox"
          aria-hidden={!open}
        >
          <div className={styles.menuInner}>
            {CHANNELS.map((c) => (
              <Link
                key={c.key}
                href={`/marketing/${c.key}`}
                className={`${styles.item} ${
                  c.key === current ? styles.itemActive : ""
                }`}
                role="option"
                aria-selected={c.key === current}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
