import styles from "@/assets/styles/components/AboutTagline.module.scss";
import { aboutTagline } from "@/data/about";

export default function AboutTagline() {
  return (
    <section className={styles.section}>
      <div className={styles.lines}>
        {aboutTagline.lines.map((l, i) => (
          <p className={styles.line} key={i}>
            <span>{l.left}</span>
            <span className={styles.bar} aria-hidden="true" />
            <span>{l.right}</span>
          </p>
        ))}
      </div>
      <p className={styles.desc}>{aboutTagline.desc}</p>
    </section>
  );
}
