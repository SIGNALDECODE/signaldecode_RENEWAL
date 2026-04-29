import styles from "./Partners.module.css";

const ARROW_DARK =
  "https://www.figma.com/api/mcp/asset/721e6712-1ac3-4deb-8f39-a06764f152e4";
const ARROW_LIGHT =
  "https://www.figma.com/api/mcp/asset/e0f770bd-fdc7-4049-af25-f49f3aa96d43";

const cards = Array.from({ length: 6 });

export default function Partners() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>SUB TITLE</p>
        <h2 className={styles.title}>최고의 선택, 결과로 증명하는 파트너사</h2>
        <p className={styles.desc}>
          단순한 협력을 넘어 파트너사의 성장을 최우선으로 생각합니다. 이미
          수많은 기업이 [회사명]과 함께하며 시장에서의 독보적인 성과를 경험하고
          있습니다.
        </p>
      </div>

      <div className={styles.scroller}>
        <div className={styles.cards}>
          {cards.map((_, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.thumb}>
                <div className={styles.placeholder} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>타이틀</h3>
                <p className={styles.cardDesc}>
                  서브타이서브타이틀서브타이틀서브타이틀서서브타이틀서브타이틀브타이틀틀
                </p>
                <div className={styles.tags}>
                  <span>#키워드</span>
                  <span>#키워드</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.arrows}>
        <button className={`${styles.arrow} ${styles.arrowLight}`}>
          <img src={ARROW_DARK} alt="prev" />
        </button>
        <button className={`${styles.arrow} ${styles.arrowDark}`}>
          <img src={ARROW_LIGHT} alt="next" />
        </button>
      </div>
    </section>
  );
}
