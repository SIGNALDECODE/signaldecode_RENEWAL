import styles from "./PhoneSlider.module.css";

const PHONE_SIDE1 =
  "https://www.figma.com/api/mcp/asset/8c4dd352-0148-4fa8-afec-56fe0e35bf92";
const PHONE_SIDE2 =
  "https://www.figma.com/api/mcp/asset/f6775a7e-7518-4c91-b292-de9ff541683b";
const PHONE_CENTER =
  "https://www.figma.com/api/mcp/asset/f6775a7e-7518-4c91-b292-de9ff541683b";
const ARROW_DARK =
  "https://www.figma.com/api/mcp/asset/721e6712-1ac3-4deb-8f39-a06764f152e4";
const ARROW_LIGHT =
  "https://www.figma.com/api/mcp/asset/e0f770bd-fdc7-4049-af25-f49f3aa96d43";

export default function PhoneSlider() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>SUB TITLE</p>
        <h2 className={styles.title}>성공의 기록이 곧 우리의 실력입니다.</h2>
        <p className={styles.desc}>
          막연한 제안이 아닌, 실제 수치로 증명된 프로젝트들입니다. 다양한 업종의
          한계를 넘어서며 만들어낸 <br />
          시그널디코드만의 압도적인 퍼포먼스를 확인해 보세요.
        </p>
      </div>

      <div className={styles.toggle}>
        <span className={styles.toggleInactive}>마케팅</span>
        <span className={styles.switch}>
          <span className={styles.knob} />
        </span>
        <span className={styles.toggleActive}>웹·개발</span>
      </div>

      <div className={styles.slider}>
        <button className={`${styles.arrow} ${styles.arrowLight}`}>
          <img src={ARROW_DARK} alt="prev" />
        </button>

        <div className={styles.phones}>
          <div className={styles.phoneSide}>
            <img src={PHONE_SIDE1} alt="" />
          </div>
          <div className={styles.phoneCenter}>
            <img src={PHONE_CENTER} alt="" />
          </div>
          <div className={styles.phoneSide}>
            <img src={PHONE_SIDE2} alt="" />
          </div>
        </div>

        <button className={`${styles.arrow} ${styles.arrowDark}`}>
          <img src={ARROW_LIGHT} alt="next" />
        </button>
      </div>

      <button className={styles.more}>더 보러가기</button>
    </section>
  );
}
