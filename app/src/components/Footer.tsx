import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cols}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>New Source</h3>
            <div className={styles.field}>
              <p className={styles.fieldLabel}>Adress</p>
              <p className={styles.fieldValue}>
                서울특별시 마포구 잔다리로 44, 6층(서교동, 센터원빌딩)
              </p>
            </div>
            <div className={styles.field}>
              <p className={styles.fieldLabel}>E-mail</p>
              <p className={styles.fieldValue}>signaldecode@signal-decode.com</p>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Info</h3>
            <div className={styles.row}>
              <div className={styles.field}>
                <p className={styles.fieldLabel}>대표</p>
                <p className={styles.fieldValue}>손재현</p>
              </div>
              <div className={styles.field}>
                <p className={styles.fieldLabel}>Phone</p>
                <p className={styles.fieldValue}>02-322-7779</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <p className={styles.fieldLabel}>사업자번호</p>
                <p className={styles.fieldValue}>397-88-03608</p>
              </div>
              <div className={styles.field}>
                <p className={styles.fieldLabel}>업무시간</p>
                <p className={styles.fieldValue}>10:00 - 19:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            COPYRIGHT © 2020 SIGNALDECODE. ALL RIGHTS RESERVED.
          </p>
          <p className={styles.bigText}>SIGNAL DECODE</p>
        </div>
      </div>
    </footer>
  );
}
