import styles from "@/assets/styles/components/ServiceCards.module.scss";
import type { Card } from "@/types/channel";

type Props = {
  kicker: string;
  title: string;
  cardImage?: string;
  cardGradient?: string;
  cards: Card[];
};

export default function ServiceCards({
  kicker,
  title,
  cardImage,
  cardGradient,
  cards,
}: Props) {
  return (
    <section className={styles.section}>
      <header className={styles.heading}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>
      </header>
      <ul className={styles.grid}>
        {cards.map((card, idx) => (
          <li key={`${card.label}-${idx}`} className={styles.card}>
            <div className={styles.visual}>
              {cardGradient ? (
                <div
                  className={styles.visualGradient}
                  style={{ background: cardGradient }}
                />
              ) : cardImage ? (
                <img src={cardImage} alt="" className={styles.visualBg} />
              ) : null}
              <div className={styles.visualDim} />
              <span className={styles.label}>{card.label}</span>
              <span className={styles.pill}>{card.pillLabel}</span>
            </div>
            <div className={styles.body}>
              <h3 className={styles.subtitle}>{card.subtitle}</h3>
              <p className={styles.desc}>{card.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
