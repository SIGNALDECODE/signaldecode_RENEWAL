import styles from "@/assets/styles/components/web/WebFeatures.module.scss";
import { webFeatures } from "@/data/web";

export default function WebFeatures() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{webFeatures.eyebrow}</p>
        <h2 className={styles.title}>{webFeatures.title}</h2>
      </header>

      <ul className={styles.grid}>
        {webFeatures.cards.map((card) => (
          <li key={card.title} className={styles.card}>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
            <div className={styles.cardArt} aria-hidden>
              <img src={card.image} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
