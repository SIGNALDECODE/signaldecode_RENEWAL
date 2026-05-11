import Link from "next/link";
import styles from "@/assets/styles/components/marketing/ChannelCTA.module.scss";

type Props = {
  kicker: string;
  brand: string;
  title: string;
  desc: string;
  link: { href: string; label: string };
};

export default function ChannelCTA({ kicker, brand, title, desc, link }: Props) {
  return (
    <section className={styles.section} aria-label={title}>
      <img src="/images/marketing/cta-bg.png" alt="" className={styles.bg} />
      <div className={styles.dim} />
      <div className={styles.inner}>
        <div className={styles.tags}>
          <span className={styles.tag}>{kicker}</span>
          <span className={styles.tagDot} aria-hidden />
          <span className={styles.tag}>{brand}</span>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        <Link href={link.href} className={styles.cta}>
          <span className={styles.ctaLabel}>{link.label}</span>
          <span className={styles.ctaIcon} aria-hidden>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
