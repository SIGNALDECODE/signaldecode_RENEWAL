import styles from "./ValueCards.module.css";

const cards = [
  {
    num: "01",
    img: "/icons/value1.png",
    title: "Core (본질)",
    desc: "단순한 감이 아닌 철저한 시장 분석과 정교한 데이터를 바탕으로, 타겟의 행동을 예측",
  },
  {
    num: "02",
    img: "/icons/value2.png",
    title: "Visual (감각)",
    desc: "단순한 감이 아닌 철저한 시장 분석과 정교한 데이터를 바탕으로, 타겟의 행동을 예측",
  },
  {
    num: "03",
    img: "/icons/value3.png",
    title: "Logic (논리)",
    desc: "단순한 감이 아닌 철저한 시장 분석과 정교한 데이터를 바탕으로, 타겟의 행동을 예측",
  },
  {
    num: "04",
    img: "/icons/value4.png",
    title: "Fluid (유연)",
    desc: "단순한 감이 아닌 철저한 시장 분석과 정교한 데이터를 바탕으로, 타겟의 행동을 예측",
  },
  {
    num: "05",
    img: "/icons/value5.png",
    title: "Impact (성과)",
    desc: "단순한 감이 아닌 철저한 시장 분석과 정교한 데이터를 바탕으로, 타겟의 행동을 예측",
  },
  {
    num: "06",
    img: "/icons/value6.png",
    title: "Mastery (완성)",
    desc: "단순한 감이 아닌 철저한 시장 분석과 정교한 데이터를 바탕으로, 타겟의 행동을 예측",
  },
];

export default function ValueCards() {
  return (
    <section className={styles.section}>
      <img src="/images/overview.jpg" alt="" className={styles.bg} />
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...cards, ...cards].map((c, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.num}>{c.num}</p>
              <div className={styles.imgBox}>
                <img src={c.img} alt="" />
              </div>
              <div className={styles.text}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
