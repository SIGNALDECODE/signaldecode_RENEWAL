import styles from "@/assets/styles/components/AboutKeywords.module.scss";
import { aboutKeywords } from "@/data/about";

export default function AboutKeywords() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{aboutKeywords.eyebrow}</p>
        <h2 className={styles.title}>{aboutKeywords.title}</h2>
        <p className={styles.lead}>{aboutKeywords.desc}</p>
      </header>

      <ul className={styles.list}>
        {aboutKeywords.cards.map((c) => (
          <li className={styles.card} key={c.title}>
            <span className={styles.dot} aria-hidden="true" />
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.desc}>{c.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
