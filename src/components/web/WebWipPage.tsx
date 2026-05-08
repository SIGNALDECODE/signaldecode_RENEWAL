import styles from "@/assets/styles/components/WebWipPage.module.scss";

export default function WebWipPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.title}>
          현재 <strong>서비스를 제작중</strong>입니다.
        </p>
      </div>
    </main>
  );
}
