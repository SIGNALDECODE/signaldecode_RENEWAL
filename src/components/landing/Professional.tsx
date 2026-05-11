"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "@/assets/styles/components/landing/Professional.module.scss";
import { professional } from "@/data/landing/professional";

export default function Professional() {
  const { copy, items } = professional;
  const panelRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const total = (items.length - 1) * 600 + 600;
    const t = setTimeout(() => setSettled(true), total + 50);
    return () => clearTimeout(t);
  }, [revealed, items.length]);

  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <div className={styles.copyBody}>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.desc}>{copy.desc}</p>
        </div>
      </div>

      <div className={styles.panel} ref={panelRef}>
        <ul
          className={`${styles.stack} ${revealed ? styles.stackIn : ""} ${
            settled ? styles.stackSettled : ""
          }`}
        >
          {items.map((item, i) => (
            <li
              key={i}
              style={{ "--i": i } as CSSProperties}
              className={`${styles.itemCard} ${
                item.highlighted ? styles.itemCardActive : ""
              }`}
            >
              <div className={styles.itemHead}>
                <span className={styles.avatar}>
                  {item.logo ? (
                    <img src={item.logo} alt="" draggable={false} />
                  ) : (
                    <span className={styles.avatarPlaceholder} />
                  )}
                </span>
                <div className={styles.itemMeta}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemSub}>{item.sub}</p>
                </div>
              </div>
              {item.badge && <span className={styles.badge}>{item.badge}</span>}
              {item.price && <p className={styles.price}>{item.price}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
