import Image from "next/image";
import styles from "@/assets/styles/components/AboutMegaphone.module.scss";
import { aboutMegaphone } from "@/data/about";

export default function AboutMegaphone() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrap}>
        <Image
          src={aboutMegaphone.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 80vw, 720px"
          className={styles.image}
        />
      </div>
      <div className={styles.copy}>
        <h2 className={styles.title}>{aboutMegaphone.title}</h2>
        <p className={styles.desc}>{aboutMegaphone.desc}</p>
      </div>
    </section>
  );
}
