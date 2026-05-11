import Image from "next/image";
import styles from "@/assets/styles/components/about/AboutOverview.module.scss";
import { aboutOverview } from "@/data/about";

export default function AboutOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{aboutOverview.eyebrow}</p>
          <div className={styles.titleBlock}>
            <h2 className={styles.title}>{aboutOverview.title}</h2>
            <p className={styles.desc}>{aboutOverview.desc}</p>
          </div>
        </header>

        <div className={styles.hero}>
          <Image
            src={aboutOverview.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 92vw, 1200px"
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
}
