import Image from "next/image";
import styles from "@/assets/styles/components/about/AboutValuePillars.module.scss";
import { aboutValuePillars } from "@/data/about";

// Figma Frame 2095587695 (y=8384) — 3행 지그재그 레이아웃:
//   • 1행: [카드] + [설명]
//   • 2행: [설명] + [카드]
//   • 3행: [카드] + [설명]
//
// 각 카드: 다크 → 미드 그레이 → 라이트 그레이 톤 시퀀스로 점점 밝아짐.
// 카드 안에는 3D 글래스 아이콘 + 큰 영문 라벨 + 짧은 캡션.
// 설명 영역엔 한글 서브타이틀 + 본문 텍스트.

export default function AboutValuePillars() {
  return (
    <section className={styles.section}>
      {aboutValuePillars.map((p) => (
        <div key={p.label} className={styles.row}>
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <Image
                src={p.icon}
                alt=""
                width={144}
                height={138}
                className={styles.icon}
              />
            </div>
            <div className={styles.labelWrap}>
              <h3 className={styles.label}>{p.label}</h3>
              <p className={styles.caption}>{p.caption}</p>
            </div>
          </div>

          <div className={styles.desc}>
            <h4 className={styles.subtitle}>{p.title}</h4>
            <p className={styles.body}>{p.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
