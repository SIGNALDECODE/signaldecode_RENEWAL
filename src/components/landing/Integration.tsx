import styles from "@/assets/styles/components/Integration.module.scss";
import { integration } from "@/data/landing/integration";

export default function Integration() {
  const { copy, more, cards } = integration;

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <div className={styles.headBody}>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.desc}>{copy.desc}</p>
        </div>
      </div>

      <ul className={styles.list}>
        {cards.map((card) => {
          const Tag = card.href ? "a" : "div";
          return (
            <li key={card.title} className={styles.item}>
              <Tag
                className={styles.card}
                {...(card.href ? { href: card.href } : {})}
              >
                <img
                  className={styles.cardImage}
                  src={card.img}
                  alt=""
                  draggable={false}
                />
                <div className={styles.cardOverlay} aria-hidden="true" />
                <div className={styles.cardBody}>
                  <div className={styles.cardHead}>
                    <p className={styles.cardEyebrow}>{card.eyebrow}</p>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  </div>
                  <p className={styles.cardDesc}>{card.desc}</p>
                  <span className={styles.cardMore}>
                    {more}
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1L5 5L1 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Tag>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
