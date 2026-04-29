import styles from "./Professional.module.css";

const AVATAR = "/icons/avatar.png";

export default function Professional() {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>PROFESSIONAL</p>
        <h2 className={styles.title}>
          데이터로 증명하는<br />퍼포먼스 마케팅 솔루션
        </h2>
        <p className={styles.desc}>
          귀사의 비즈니스 성장을 가속화할 최적의 인재들을 엄선하여 데이터 기반의
          리스트로 제공합니다. <br />복잡한 탐색 과정 없이 업종별 정교한 필터링
          시스템을 활용합니다.
        </p>
      </div>

      <div className={styles.panel}>
        <div className={styles.innerCard}>
          <div className={`${styles.row} ${styles.rowFront}`}>
            <div className={styles.user}>
              <img src={AVATAR} alt="" className={styles.avatar} />
              <div>
                <p className={styles.userName}>퍼포먼스 마케터</p>
                <p className={styles.userSub}>BTC</p>
              </div>
            </div>
            <span className={styles.tag}>음식점</span>
          </div>

          <div className={`${styles.row} ${styles.rowBlur}`}>
            <div className={styles.user}>
              <img src={AVATAR} alt="" className={styles.avatar} />
              <div>
                <p className={styles.userName}>글로벌 마케터</p>
                <p className={styles.userSub}>BTC</p>
              </div>
            </div>
            <div className={styles.priceCol}>
              <p className={styles.price}>$2,509.75</p>
              <p className={styles.priceDown}>-5.5%</p>
            </div>
          </div>

          <div className={`${styles.row} ${styles.rowBlur}`}>
            <div className={styles.user}>
              <img src={AVATAR} alt="" className={styles.avatar} />
              <div>
                <p className={styles.userName}>글로벌 마케터</p>
                <p className={styles.userSub}>BTC</p>
              </div>
            </div>
            <div className={styles.priceCol}>
              <p className={styles.price}>$2,509.75</p>
              <p className={styles.priceUp}>+2.5%</p>
            </div>
          </div>

          <div className={`${styles.row} ${styles.rowBlur}`}>
            <div className={styles.user}>
              <img src={AVATAR} alt="" className={styles.avatar} />
              <div>
                <p className={styles.userName}>글로벌 마케터</p>
                <p className={styles.userSub}>BTC</p>
              </div>
            </div>
            <div className={styles.priceCol}>
              <p className={styles.price}>$2,509.75</p>
              <p className={styles.priceDown}>-4.6%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
