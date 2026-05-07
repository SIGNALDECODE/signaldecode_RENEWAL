import Image from "next/image";
import styles from "@/assets/styles/components/AboutValuePillars.module.scss";
import { aboutOverview, aboutValuePillars } from "@/data/about";

export default function AboutValuePillars() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{aboutOverview.eyebrow}</p>
        <h2 className={styles.title}>{aboutOverview.title}</h2>
        <p className={styles.lead}>{aboutOverview.desc}</p>
      </header>

      <ul className={styles.list}>
        {aboutValuePillars.map((p) => (
          <li className={styles.card} key={p.label}>
            <div className={styles.head}>
              <div className={styles.iconWrap}>
                <Image src={p.icon} alt="" fill sizes="200px" />
              </div>
              <div className={styles.headText}>
                <p className={styles.label}>{p.label}</p>
                <p className={styles.caption}>{p.caption}</p>
              </div>
            </div>
            <div className={styles.body}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
