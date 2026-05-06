import styles from "./ServiceCards.module.scss";
import type { Card } from "@/types/channel";

type Props = {
  kicker: string;
  title: string;
  brand: string;
  cards: Card[];
  bgImage?: string;
  tint?: string;
};

function PhoneVisual() {
  return (
    <div className={styles.phoneWrap}>
      <img src="/images/marketing/phone-back.png" alt="" className={styles.phoneBack} />
      <img src="/images/marketing/phone-front.png" alt="" className={styles.phoneFront} />
    </div>
  );
}

function SearchVisual({ term = "Signal" }: { term?: string }) {
  return (
    <div className={styles.searchCard}>
      <div className={styles.searchInput}>
        <svg className={styles.searchIcon} viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
          <path d="m11 11 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span className={styles.searchText}>
          {term}
          <span className={styles.searchCaret} />
        </span>
        <svg className={styles.searchClose} viewBox="0 0 12 12" fill="none">
          <path d="m2 2 8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <svg className={styles.searchFilter} viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
      <ul className={styles.searchList}>
        <li><b>Signal</b>-decode</li>
        <li><b>Signal</b>-decode Agency</li>
        <li><b>Signal</b>-decode Marketing</li>
      </ul>
    </div>
  );
}

function MapVisual() {
  return (
    <div className={styles.mapWrap}>
      <img src="/images/marketing/map-3d.png" alt="" className={styles.mapImg} />
      <div className={styles.mapDim} />
      <img src="/images/marketing/map-pin.png" alt="" className={styles.mapPin} />
    </div>
  );
}

export default function ServiceCards({
  kicker,
  title,
  brand: defaultBrand,
  cards,
  bgImage = "/images/marketing/card-bg.png",
  tint: defaultTint,
}: Props) {
  return (
    <section className={styles.section}>
      <header className={styles.heading}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>
      </header>
      <div className={styles.grid}>
        {cards.map((card, idx) => {
          const variant = card.variant ?? "phone";
          const brand = card.brand ?? defaultBrand;
          const tint = card.tint ?? defaultTint;
          const cardStyle = tint
            ? ({ "--card-tint": tint } as React.CSSProperties)
            : undefined;

          return (
            <article key={`${card.title}-${idx}`} className={styles.card}>
              <div className={styles.visual} style={cardStyle}>
                <img src={bgImage} alt="" className={styles.visualBg} />
                {variant === "phone" && <PhoneVisual />}
                {variant === "search" && <SearchVisual term={card.searchTerm} />}
                {variant === "map" && <MapVisual />}
                {tint && <div className={styles.visualTint} />}
                {brand && <span className={styles.brand}>{brand}</span>}
              </div>
              <div className={styles.body}>
                <span className={styles.tag}>{card.tag}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
