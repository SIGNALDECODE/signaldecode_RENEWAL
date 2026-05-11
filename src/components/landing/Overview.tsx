import styles from "@/assets/styles/components/landing/Overview.module.scss";
import { overviewCopy } from "@/data/landing/overview";

export default function Overview() {
  const desc = Array.isArray(overviewCopy.desc) ? overviewCopy.desc : [overviewCopy.desc];

  return (
    <section className={styles.section}>
      <div className={styles.phone} data-morph-anchor />
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{overviewCopy.eyebrow}</p>
        <h2 className={styles.title}>{overviewCopy.title}</h2>
        <div className={styles.desc}>
          {desc.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
