import Image from "next/image";
import styles from "@/assets/styles/components/AboutTagline.module.scss";
import { aboutTagline } from "@/data/about";

export default function AboutTagline() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.lines}>
          {aboutTagline.lines.map((l, i) => {
            const isMorph = i === 1;
            return (
              <div
                key={i}
                className={styles.line}
                data-mode={i === 0 ? "fill" : "hug"}
              >
                <span className={styles.word}>{l.left}</span>
                <span
                  className={styles.bar}
                  {...(isMorph ? { "data-morph-anchor": "" } : {})}
                >
                  {!isMorph && (
                    <Image
                      src={l.bar}
                      alt=""
                      fill
                      sizes="196px"
                      className={styles.barImg}
                    />
                  )}
                </span>
                <span className={styles.word}>{l.right}</span>
              </div>
            );
          })}
        </div>
        <p className={styles.desc}>{aboutTagline.desc}</p>
      </div>
    </section>
  );
}
