import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src="/images/hero.png" alt="" className={styles.bg} />
    </section>
  );
}
