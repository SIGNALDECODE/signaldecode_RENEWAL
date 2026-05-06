import styles from "@/assets/styles/components/MarketingHero.module.scss";
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
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
