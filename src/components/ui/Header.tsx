"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const LOGO = "/icons/logo.png";

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
          <img src={LOGO} alt="" className={styles.logoIcon} />
          <span className={styles.brand}>SIGNALDECODE</span>
        </Link>
        <nav className={styles.nav}>
          <a href="#">회사소개</a>
          <Link href="/marketing/naver">마케팅서비스</Link>
          <a href="#">웹·개발</a>
          <a href="#">이벤트</a>
          <a href="#">고객지원</a>
        </nav>
      </div>
      <button className={styles.cta}>문의하기</button>
    </header>
  );
}
