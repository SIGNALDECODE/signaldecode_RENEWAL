import styles from "@/assets/styles/components/web/WebWipPage.module.scss";

export default function WebWipPage() {
  return (
    <main className={styles.page}>
      <img
        src="/images/web/wip/hero-bg-26e15c.png"
        alt=""
        className={styles.bg}
        aria-hidden
      />
      <div className={styles.overlay} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.icon} aria-hidden>
          <div className={styles.iconSweep} />
        </div>
        <p className={styles.title}>
          <span className={styles.dim}>현재</span>{" "}
          <strong className={styles.bold}>서비스를 제작중</strong>
          <span className={styles.dim}>입니다.</span>
        </p>
      </div>
    </main>
  );
}
