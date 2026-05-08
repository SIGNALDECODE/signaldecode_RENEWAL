import type { WebProjectDetail } from "@/types/web";

export const daeseongKiosk: WebProjectDetail = {
  slug: "daeseong-kiosk",
  brand: "D.Lab(대성학원)",
  brandAccent: "#1B4F9D",
  pageNumber: "6",
  heroBg: "/images/web/hero/eumfood.png",
  hero: {
    title: "D.LAB",
    paragraphs: [
      "학생들의 사용 환경을 고려하여 복잡하지 않은 구조와 간결한 UI 중심으로 키오스크 디자인을 구성하였습니다.",
      "핵심 정보가 한눈에 들어올 수 있도록 콘텐츠를 단순화하고, 불필요한 요소를 없앤 미니멀한 UI 구조를 적용했습니다.",
    ],
    meta: [
      { label: "Project", value: "재수 대입 전문 학원" },
      { label: "Role", value: "Kiosk(무인시스템)" },
      { label: "Contribution", value: "100%(1인 작업)" },
      { label: "Tools", value: "Figma" },
      { label: "Period", value: "2026.03 – 2026.04" },
    ],
  },
  coreValue: {
    eyebrow: "core value",
    title: "정보의 직관성 **4가지 키워드**",
    subParagraph: "",
    cards: [
      {
        num: "01",
        title: "직관적인 구조",
        desc: "필요한 정보를 한눈에 파악할 수 있는 레이아웃",
      },
      {
        num: "02",
        title: "내용의 단순화",
        desc: "불필요한 정보는 과감히 줄이고 필요한 정보만 배치",
      },
      {
        num: "03",
        title: "사용자 중심",
        desc: "사용 편의성과 직관적인 사용자의 흐름 중심의 구성",
      },
      {
        num: "04",
        title: "깔끔한 요소",
        desc: "정돈된 레이아웃으로 높은 정보 전달력과 편리한 사용성",
      },
    ],
  },
  typography: {
    eyebrow: "typography",
    title: "정보의 직관성, **프리텐다드**",
    subParagraph: "",
    specimens: [
      {
        weight: "ExtraBold",
        display: "D.LAB",
        sample: "취약과목에 집중할 수 있는 맞춤형 학생 시스템",
        specs: [
          { label: "Font Weight", value: "ExtraBold" },
          { label: "Html Tag", value: "Headline" },
          { label: "Letter Spacing", value: "-2.5%" },
          { label: "Font Size", value: "48 36 28" },
        ],
      },
      {
        weight: "Bold",
        display: "D.LAB",
        sample: "취약과목에 집중할 수 있는 맞춤형 학생 시스템",
        specs: [
          { label: "Font Weight", value: "Bold" },
          { label: "Html Tag", value: "H1 H2 H3" },
          { label: "Letter Spacing", value: "-2.5%" },
          { label: "Font Size", value: "32 24 20" },
        ],
      },
      {
        weight: "Regular",
        display: "D.LAB",
        sample: "취약과목에 집중할 수 있는 맞춤형 학생 시스템",
        specs: [
          { label: "Font Weight", value: "Regular" },
          { label: "Html Tag", value: "P SPAN" },
          { label: "Letter Spacing", value: "-2.5%" },
          { label: "Font Size", value: "18 16 14" },
        ],
      },
    ],
  },
  color: {
    eyebrow: "color style",
    title: "핵심 서비스가 **한눈에 파악되는**",
    subParagraph: "",
    swatches: [
      { hex: "#1B4F9D", flex: 530, labelOnDark: true },
      { hex: "#262626", flex: 348, labelOnDark: true },
      { hex: "#505050", flex: 311, labelOnDark: true },
      { hex: "#666666", flex: 219, labelOnDark: true },
      { hex: "#FFFFFF", flex: 200, labelOnDark: false, bordered: true },
    ],
  },
  intro: {
    eyebrow: "D.LAB MAIN PAGE",
    paragraph:
      "핵심 서비스를 한번에 파악할 수 있도록 정보의 흐름과 우선순위를 먼저 정리하고,\n학생들이 화면을 보는 순간 필요한 정보를 빠르게 파악할 수 있도록 UI를 구성했습니다.",
  },
  mockPreview: {
    src: "/images/web/preview/daeseong-kiosk.png",
    alt: "D.Lab 대성학원 키오스크 미리보기",
  },
};
