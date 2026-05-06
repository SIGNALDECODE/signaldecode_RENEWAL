import styles from "@/assets/styles/components/Hero.module.scss";
import { hero } from "@/data/landing/hero";
import BrandWave from "./BrandWave";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src={hero.video.src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      <div className={styles.overlay}>
        <ul className={styles.meta}>
          {hero.meta.map((line) => (
            <li key={line} className={styles.metaItem}>
              {line}
            </li>
          ))}
        </ul>
        <BrandWave text={hero.brand} />
      </div>
    </section>
  );
}
