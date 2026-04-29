import styles from "./Header.module.css";

const LOGO =
  "https://www.figma.com/api/mcp/asset/95ec3519-2e24-4d33-85f1-a36793293040";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src={LOGO} alt="" className={styles.logoIcon} />
          <span className={styles.brand}>SIGNALDECODE</span>
        </div>
        <nav className={styles.nav}>
          <a href="#">회사소개</a>
          <a href="#">마케팅서비스</a>
          <a href="#">웹·개발</a>
          <a href="#">이벤트</a>
          <a href="#">고객지원</a>
        </nav>
      </div>
      <button className={styles.cta}>문의하기</button>
    </header>
  );
}
