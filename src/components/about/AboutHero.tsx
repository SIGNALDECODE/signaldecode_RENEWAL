import Image from "next/image";
import styles from "@/assets/styles/components/about/AboutHero.module.scss";
import { aboutHero } from "@/data/about";

export default function AboutHero() {
  return (
    <section className={styles.section}>
      <Image
        src={aboutHero.bg}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.bg}
      />

      <p className={styles.giant} aria-label={aboutHero.giantText}>
        {aboutHero.giantText}
      </p>

      <div className={styles.megaphone}>
        <Image
          src={aboutHero.megaphone}
          alt=""
          fill
          sizes="(max-width: 1024px) 60vw, 638px"
          className={styles.megaphoneImg}
          priority
        />
      </div>

      <div className={styles.copy}>
        <h1 className={styles.title}>{aboutHero.title}</h1>
        <p className={styles.desc}>{aboutHero.desc}</p>
      </div>
    </section>
  );
}
