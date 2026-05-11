import Link from "next/link";
import styles from "@/assets/styles/components/contact/ContactHero.module.scss";
import { contact } from "@/data/contact";

export default function ContactHero() {
  const { hero } = contact;

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${hero.bg})` }}
    >
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.inner}>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.desc}>{hero.desc}</p>
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
          <Link href="/" className={styles.crumbHome} aria-label="home">
            <img src="/icons/Home.svg" alt="" />
          </Link>
          {hero.breadcrumb.map((c) => (
            <span key={c.label} className={styles.crumb}>
              <span className={styles.crumbArrow} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="m6 4 4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {c.label}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
