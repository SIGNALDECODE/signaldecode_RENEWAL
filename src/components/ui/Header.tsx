"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { header } from "@/data/ui/header";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          <img src={header.logo.src} alt={header.logo.alt} className={styles.logoIcon} />
          <span className={styles.brand}>{header.brand}</span>
        </Link>
        <nav className={styles.nav}>
          {header.nav.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <button className={styles.cta}>{header.cta.label}</button>
    </header>
  );
}
