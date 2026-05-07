import styles from "@/assets/styles/components/AboutMarquee.module.scss";
import { aboutMarquee } from "@/data/about";

export default function AboutMarquee() {
  const items = Array.from({ length: 4 });
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {items.map((_, i) => (
          <span key={i} className={styles.text}>
            {aboutMarquee.text}
          </span>
        ))}
      </div>
    </div>
  );
}
