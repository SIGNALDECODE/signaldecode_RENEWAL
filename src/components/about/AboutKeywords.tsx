import Image from "next/image";
import styles from "@/assets/styles/components/about/AboutKeywords.module.scss";
import { aboutKeywords } from "@/data/about";

export default function AboutKeywords() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{aboutKeywords.eyebrow}</p>
          <div className={styles.titleBlock}>
            <h2 className={styles.title}>{aboutKeywords.title}</h2>
            <p className={styles.lead}>{aboutKeywords.desc}</p>
          </div>
        </header>

        <ul className={styles.list}>
          {aboutKeywords.cards.map((c) => (
            <li className={styles.card} key={c.title}>
              <div className={styles.icon} aria-hidden="true">
                <Image
                  src={c.icon}
                  alt=""
                  width={466}
                  height={80}
                  className={styles.iconImg}
                />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.desc}>{c.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
