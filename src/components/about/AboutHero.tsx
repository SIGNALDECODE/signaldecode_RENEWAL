import Image from "next/image";
import styles from "@/assets/styles/components/AboutHero.module.scss";
import { aboutHero } from "@/data/about";

export default function AboutHero() {
  return (
    <section className={styles.section}>
      <Image
        src={aboutHero.spotlight}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.bg}
      />

      <p className={styles.giant} aria-label={aboutHero.marqueeTop}>
        {aboutHero.marqueeTop}
      </p>

      <ul className={styles.meta}>
        {aboutHero.meta.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>

      <p className={styles.badge}>{aboutHero.badge}</p>
    </section>
  );
}
