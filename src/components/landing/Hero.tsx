import styles from "./Hero.module.scss";
import { hero } from "@/data/landing/hero";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src={hero.bg} alt="" className={styles.bg} />
    </section>
  );
}
