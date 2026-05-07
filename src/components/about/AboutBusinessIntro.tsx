import styles from "@/assets/styles/components/AboutBusinessIntro.module.scss";
import { aboutBusinessIntro } from "@/data/about";

export default function AboutBusinessIntro() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{aboutBusinessIntro.eyebrow}</p>
        <h2 className={styles.title}>{aboutBusinessIntro.title}</h2>
      </header>

      <ul className={styles.list}>
        {aboutBusinessIntro.cards.map((c) => (
          <li className={styles.item} key={c.num}>
            <div className={styles.disc}>
              <div className={styles.discInner}>
                <p className={styles.cardTitle}>{c.title}</p>
                <span className={styles.num}>{c.num}</span>
              </div>
              <p className={styles.desc}>{c.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
