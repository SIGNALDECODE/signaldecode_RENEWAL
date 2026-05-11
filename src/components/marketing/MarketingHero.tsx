import styles from "@/assets/styles/components/marketing/MarketingHero.module.scss";
import { marketingHero } from "@/data/marketing/hero";

type Props = {
  channel: string;
};

export default function MarketingHero({ channel }: Props) {
  return (
    <section className={styles.hero}>
      <img src={marketingHero.bg} alt="" className={styles.bg} />
      <div className={styles.inner}>
        <div className={styles.text}>
          <h1 className={styles.title}>{marketingHero.title}</h1>
          <p className={styles.subtitle}>{marketingHero.subtitle}</p>
        </div>
        <nav className={styles.crumb} aria-label="breadcrumb">
          <span className={styles.crumbHome} aria-hidden>
            <img src="/icons/Home.svg" alt="" />
          </span>
          <span className={styles.crumbArrow} aria-hidden />
          <span>{marketingHero.breadcrumb.rootLabel}</span>
          <span className={styles.crumbArrow} aria-hidden />
          <span>{channel}</span>
        </nav>
      </div>
    </section>
  );
}
