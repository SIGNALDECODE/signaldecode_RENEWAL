import styles from "@/assets/styles/components/Professional.module.scss";
import { professional } from "@/data/landing/professional";

export default function Professional() {
  const { copy, items } = professional;

  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <div className={styles.copyBody}>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.desc}>{copy.desc}</p>
        </div>
      </div>

      <div className={styles.panel}>
        <ul className={styles.stack}>
          {items.map((item, i) => (
            <li
              key={i}
              className={`${styles.itemCard} ${
                item.highlighted ? styles.itemCardActive : ""
              }`}
            >
              <div className={styles.itemHead}>
                <span className={styles.avatar}>
                  {item.logo ? (
                    <img src={item.logo} alt="" draggable={false} />
                  ) : (
                    <span className={styles.avatarPlaceholder} />
                  )}
                </span>
                <div className={styles.itemMeta}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemSub}>{item.sub}</p>
                </div>
              </div>
              {item.badge && <span className={styles.badge}>{item.badge}</span>}
              {item.price && <p className={styles.price}>{item.price}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
