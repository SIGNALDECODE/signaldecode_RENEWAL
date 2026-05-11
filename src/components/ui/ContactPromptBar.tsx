import Link from "next/link";
import styles from "@/assets/styles/components/ui/ContactPromptBar.module.scss";

const TEXT = "지금 웹사이트는 제대로 설계되어 있나요?";
const BUTTON_LABEL = "문의하러 가기";
const BUTTON_HREF = "/contact";

export default function ContactPromptBar() {
  return (
    <aside className={styles.bar} aria-label="문의 안내">
      <p className={styles.text}>{TEXT}</p>
      <Link href={BUTTON_HREF} className={styles.btn}>
        <span className={styles.btnIcon} aria-hidden>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect
              x="2.5"
              y="4.5"
              width="15"
              height="11"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="m3 5 7 5.5L17 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className={styles.btnLabel}>{BUTTON_LABEL}</span>
      </Link>
    </aside>
  );
}
