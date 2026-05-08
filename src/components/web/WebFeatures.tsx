import styles from "@/assets/styles/components/WebFeatures.module.scss";
import { webFeatures } from "@/data/web";

export default function WebFeatures() {
  const [card1, card2] = webFeatures.cards;
  const [img1, img2, img3] = webFeatures.images;

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{webFeatures.eyebrow}</p>
        <h2 className={styles.title}>{webFeatures.title}</h2>
      </header>

      <div className={styles.grid}>
        <div className={`${styles.cell} ${styles.imgLeft}`}>
          <img src={img1.src} alt={img1.alt} />
        </div>

        <div className={`${styles.cell} ${styles.cardTop}`}>
          <div className={styles.cardIcon}>
            <img src={card1.icon} alt="" />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{card1.title}</h3>
            <p className={styles.cardDesc}>{card1.desc}</p>
          </div>
        </div>

        <div className={`${styles.cell} ${styles.imgMid}`}>
          <img src={img3.src} alt={img3.alt} />
        </div>

        <div className={`${styles.cell} ${styles.imgRight}`}>
          <img src={img2.src} alt={img2.alt} />
        </div>

        <div className={`${styles.cell} ${styles.cardBottom}`}>
          <div className={styles.cardIcon}>
            <img src={card2.icon} alt="" />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{card2.title}</h3>
            <p className={styles.cardDesc}>{card2.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
