import styles from "./SalesNumbers.module.css";

export default function SalesNumbers() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>SALES</p>
        <h2 className={styles.title}>우리와 함께한 기업들이 올린 추가 매출</h2>
        <p className={styles.desc}>
          단순한 수치를 넘어 실질적인 비즈니스 성장으로 증명합니다. 검증된
          전략이 <br />
          만들어낸 압도적인 성과를 직접 확인하세요.
        </p>
      </div>

      <div className={styles.numbers}>
        <span className={styles.tile}>9</span>
        <span className={styles.comma}>,</span>
        <span className={styles.tile}>9</span>
        <span className={styles.tile}>9</span>
        <span className={styles.tile}>9</span>
        <span className={styles.comma}>,</span>
        <span className={styles.tile}>9</span>
        <span className={styles.tile}>9</span>
        <span className={styles.tile}>9</span>
      </div>
    </section>
  );
}
