import styles from "./Overview.module.css";

export default function Overview() {
  return (
    <section className={styles.section}>
      <div className={styles.phone}>
        <img src="/images/overview.jpg" alt="" />
      </div>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>OVERVIEW</p>
        <h2 className={styles.title}>
          Essential visuals, flawless performance
        </h2>
        <div className={styles.desc}>
          <p>
            우리는 단순히 화려한 겉모습에 치중하기보다, 브랜드가 가진 본연의
            가치를 가장 선명하게 드러낼 수 있는 최적의 솔루션을 고민합니다.
          </p>
          <p>
            시장의 흐름을 읽는 날카로운 마케팅 기획력을 바탕으로, 한 줄의
            코드에도 타협 없는 정교한 개발력을 더해
          </p>
          <p>비즈니스의 성공을 뒷받침하는 완벽한 디지털 환경을 구축합니다.</p>
        </div>
      </div>
    </section>
  );
}
