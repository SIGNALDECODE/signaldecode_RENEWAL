import Image from "next/image";
import styles from "@/assets/styles/components/AboutDivider.module.scss";
import { aboutDivider } from "@/data/about";

export default function AboutDivider() {
  return (
    <section className={styles.section}>
      <Image
        src={aboutDivider.bg}
        alt=""
        fill
        sizes="100vw"
        className={styles.bg}
      />

      <div className={styles.line} aria-hidden="true" />

      <p className={styles.marquee} aria-label={aboutDivider.marqueeText}>
        {aboutDivider.marqueeText}
      </p>
    </section>
  );
}
