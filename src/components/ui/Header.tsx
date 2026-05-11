"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/assets/styles/components/ui/Header.module.scss";
import { header } from "@/data/ui/header";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo} aria-label={header.brand}>
            <img src={header.logo.src} alt={header.logo.alt} className={styles.logoIcon} />
          </Link>
          <nav className={styles.nav}>
            {header.nav.map((item) => {
              if (item.comingSoon) {
                return (
                  <span
                    key={item.label}
                    className={`${styles.navItem} ${styles.navDisabled}`}
                    aria-disabled="true"
                    tabIndex={0}
                  >
                    {item.label}
                    <span className={styles.tooltip} role="tooltip">
                      {header.comingSoonLabel}
                    </span>
                  </span>
                );
              }
              if (item.dropdown && item.dropdown.length > 0) {
                return (
                  <div key={item.label} className={styles.navDropdownWrap}>
                    <Link
                      href={item.href}
                      className={`${styles.navItem} ${styles.navItemDropdown}`}
                      aria-haspopup="menu"
                    >
                      {item.label}
                      <span className={styles.caret} aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                    <div className={styles.dropdown} role="menu">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          href={d.href}
                          className={styles.dropdownItem}
                          role="menuitem"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link key={item.label} href={item.href} className={styles.navItem}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className={styles.right}>
          <Link href={header.cta.href} className={styles.cta}>
            {header.cta.label}
          </Link>
          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.overlayNav}>
          {header.nav.map((item) =>
            item.comingSoon ? (
              <span
                key={item.label}
                className={`${styles.overlayLink} ${styles.overlayDisabled}`}
                aria-disabled="true"
              >
                {item.label}
                <span className={styles.overlayBadge}>
                  {header.comingSoonLabel}
                </span>
              </span>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={styles.overlayLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </>
  );
}
