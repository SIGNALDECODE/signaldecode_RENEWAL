import styles from "./Quotes.module.css";

const ABS1 =
  "https://www.figma.com/api/mcp/asset/ade88c8f-5705-4dd9-bb83-2e17c25f0cd0";
const ABS2 =
  "https://www.figma.com/api/mcp/asset/945ab25b-86ce-4364-8393-da6448170bc2";
const ABS3 =
  "https://www.figma.com/api/mcp/asset/ceb5fb4c-6651-43ba-92be-7655156b1d4c";

export default function Quotes() {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <p className={styles.dim}>내 브랜드에 딱 맞는</p>
        <span className={styles.imgSm}>
          <img src={ABS1} alt="" />
        </span>
        <p className={styles.dim}>마케팅 정답을 찾고 싶어요”</p>
      </div>

      <div className={styles.rowLarge}>
        <p className={styles.bright}>막연한 광고가 아니라</p>
        <span className={styles.imgLg}>
          <img src={ABS2} alt="" />
        </span>
        <p className={styles.bright}>매출로 직결되는 전략을 갖고 싶어요”</p>
      </div>

      <div className={styles.row}>
        <p className={styles.dim}>사람들의 기억 속에</p>
        <span className={styles.imgSm}>
          <img src={ABS3} alt="" />
        </span>
        <p className={styles.dim}>잊히지 않는 이름이 되고 싶어요”</p>
      </div>
    </section>
  );
}
