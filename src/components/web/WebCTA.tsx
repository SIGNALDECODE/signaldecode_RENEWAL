import Link from "next/link";
import styles from "@/assets/styles/components/WebCTA.module.scss";
import { webCTA } from "@/data/web";

export default function WebCTA() {
  return (
    <section className={styles.section}>
      <img src={webCTA.bg} alt="" className={styles.bg} />
      <div className={styles.overlay} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 className={styles.title}>{webCTA.title}</h2>
          <p className={styles.desc}>{webCTA.desc}</p>
        </div>

        <Link href={webCTA.link.href} className={styles.cta}>
          <span>{webCTA.link.label}</span>
          <span className={styles.ctaArrow} aria-hidden>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14m0 0-6-6m6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
