import Image from "next/image";
import styles from "@/assets/styles/components/AboutFeatureSections.module.scss";
import { aboutFeatureSections } from "@/data/about";

export default function AboutFeatureSections() {
  return (
    <div className={styles.wrap}>
      {aboutFeatureSections.map((s, i) => (
        <section
          key={s.eyebrow}
          className={styles.section}
          data-align={s.align}
        >
          <Image
            src={s.bg}
            alt=""
            fill
            sizes="100vw"
            className={styles.bg}
            priority={i === 0}
          />
          <div className={styles.scrim} aria-hidden="true" />
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{s.eyebrow}</p>
            <h2 className={styles.title}>{s.title}</h2>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
