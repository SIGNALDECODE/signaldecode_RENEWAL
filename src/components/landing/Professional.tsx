import styles from "@/assets/styles/components/Professional.module.scss";
import { professional } from "@/data/landing/professional";

export default function Professional() {
  const { copy, avatar, rows } = professional;

  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h2 className={styles.title}>{copy.title}</h2>
        <p className={styles.desc}>{copy.desc}</p>
      </div>

      <div className={styles.panel}>
        <div className={styles.innerCard}>
          {rows.map((row, i) => (
            <div
              key={i}
              className={`${styles.row} ${i === 0 ? styles.rowFront : styles.rowBlur}`}
            >
              <div className={styles.user}>
                <img src={avatar} alt="" className={styles.avatar} />
                <div>
                  <p className={styles.userName}>{row.name}</p>
                  <p className={styles.userSub}>{row.sub}</p>
                </div>
              </div>
              {row.tag && <span className={styles.tag}>{row.tag}</span>}
              {row.price && row.delta && (
                <div className={styles.priceCol}>
                  <p className={styles.price}>{row.price}</p>
                  <p
                    className={
                      row.delta.direction === "up"
                        ? styles.priceUp
                        : styles.priceDown
                    }
                  >
                    {row.delta.value}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
