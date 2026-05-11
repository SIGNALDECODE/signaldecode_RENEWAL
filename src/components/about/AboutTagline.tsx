import Image from "next/image";
import styles from "@/assets/styles/components/about/AboutTagline.module.scss";
import { aboutTagline } from "@/data/about";

export default function AboutTagline() {
  const [line0, line1] = aboutTagline.lines;
  return (
    <section className={styles.section}>
      <div className={styles.stickyTrack}>
        <div className={styles.pinned}>
          <div className={styles.inner}>
            <div className={styles.lines}>
              <div className={styles.line} data-mode="fill">
                <span className={styles.word}>{line0.left}</span>
                <span className={styles.bar}>
                  <Image
                    src={line0.bar}
                    alt=""
                    fill
                    sizes="196px"
                    className={styles.barImg}
                  />
                </span>
                <span className={styles.word}>{line0.right}</span>
              </div>
              <div className={styles.line} data-mode="hug">
                <span className={styles.word}>{line1.left}</span>
                <span className={styles.bar} data-morph-anchor />
                <span className={styles.word}>{line1.right}</span>
              </div>
            </div>
            <p className={styles.desc}>{aboutTagline.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
