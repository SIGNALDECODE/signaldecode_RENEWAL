import styles from "@/assets/styles/components/web/WebHero.module.scss";
import { webHero } from "@/data/web";

export default function WebHero() {
  return (
    <section className={styles.hero}>
      <img src={webHero.bg} alt="" className={styles.bg} />
      <div className={styles.inner}>
        <div className={styles.text}>
          <h1 className={styles.title}>{webHero.title}</h1>
          <p className={styles.subtitle}>{webHero.desc}</p>
        </div>
        <nav className={styles.crumb} aria-label="breadcrumb">
          <span className={styles.crumbHome} aria-hidden>
            <img src="/icons/Home.svg" alt="" />
          </span>
          <span className={styles.crumbArrow} aria-hidden />
          <span>{webHero.breadcrumb}</span>
        </nav>
      </div>
    </section>
  );
}
