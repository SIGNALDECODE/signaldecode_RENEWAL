import type { WebProjectDetail } from "@/types/web";

export const daeseongKiosk: WebProjectDetail = {
  slug: "daeseong-kiosk",
  brand: "D.Lab(대성학원)",
  brandAccent: "#1B4F9D",
  pageNumber: "6",
  heroBg: "/images/web/daeseong-kiosk/hero-bg-19c55b.png",
  hero: {
    title: "D.Lab(대성학원)",
    subtitle: "체계적인 학습 관리 시스템 기반 대학 입시 전문 학원",
    paragraphs: [
      "학생들의 사용 환경을 고려하여 복잡하지 않은 구조와 간결한 UI 중심으로 키오스크 디자인을 구성하였습니다.",
      "핵심 정보가 한눈에 들어올 수 있도록 콘텐츠를 단순화하고, 불필요한 요소를 없앤 미니멀한 UI 구조를 적용했습니다. 단순한 정보 배치 속에서도 실제 학생들의 사용 과정을 파악해 디자인적인 완성도를 느낄 수 있는 비주얼로 구성을 변경하였습니다.",
      "복잡한 조작 없이 누구나 쉽게 사용할 수 있는 직관적인 UI를 설계하였고, 학생들이 짧은 시간 안에 원하는 정보를 빠르게 찾을 수 있도록 안정감 있는 레이아웃으로 디자인하였습니다.",
    ],
    meta: [
      { label: "Project", value: "재수 대입 전문 학원" },
      { label: "Role", value: "kiosk(무인시스템)" },
      { label: "Contribution", value: "100%(1인 작업)" },
      { label: "Tools", value: "Figma" },
      { label: "Period", value: "2026.03 – 2026.04" },
    ],
  },
  coreValue: {
    eyebrow: "core value",
    title: "정보의 직관성 **4가지 키워드**",
    subParagraph:
      "학생들의 사용 환경을 고려해 복잡한 정보를 단순화하고 핵심 정보 중심으로 배치하여,\n누구나 짧은 시간 안에 원하는 정보를 빠르게 찾을 수 있도록 직관적인 키오스크 UI를 설계했습니다.",
    cards: [
      {
        num: "01",
        title: "직관적인 구조",
        desc: "필요한 정보를 한눈에 파악할 수 있는 레이아웃",
        icon: "/images/web/daeseong-kiosk/core/icon-01.svg",
      },
      {
        num: "02",
        title: "내용의 단순화",
        desc: "불필요한 정보는 과감히 줄이고 필요한 정보만 배치",
        icon: "/images/web/daeseong-kiosk/core/icon-02.svg",
      },
      {
        num: "03",
        title: "사용자 중심",
        desc: "사용 편의성과 직관적인 사용자의 흐름 중심의 구성",
        icon: "/images/web/daeseong-kiosk/core/icon-03.svg",
      },
      {
        num: "04",
        title: "깔끔한 요소",
        desc: "정돈된 레이아웃으로 높은 정보 전달력과 편리한 사용성",
        icon: "/images/web/daeseong-kiosk/core/icon-04.svg",
      },
    ],
  },
  typography: {
    eyebrow: "typography",
    title: "정보의 직관성, **프리텐다드**",
    subParagraph:
      "필요한 정보를 한눈에 파악할 수 있도록 가독성이 뛰어난 폰트를 사용하여 디자인을 진행하였습니다.",
    decoration: "가나다",
    specimens: [
      {
        weight: "Bold",
        display: "D.LAB",
        sample: "취약과목에 집중할 수 있는 맞춤형 학생 시스템",
        specs: [],
      },
    ],
  },
  color: {
    eyebrow: "color style",
    title: "정보가 **명확하게 보이는**",
    subParagraph:
      "화이트 배경을 기반으로 블루 컬러를 사용하여 정보의 우선순위와 시선을 명확하게 구분했습니다.\n밝은 화면 속에서도 컬러가 과하지 않게 기능하며, 기업의 전문성을 강조하는 정보를 보다 직관적으로 인지할 수 있도록 설계했습니다.",
    swatches: [
      { hex: "#1B4F9D", flex: 530, labelOnDark: true },
      { hex: "#262626", flex: 348, labelOnDark: true },
      { hex: "#505050", flex: 311, labelOnDark: true },
      { hex: "#666666", flex: 219, labelOnDark: true },
      { hex: "#FFFFFF", flex: 200, labelOnDark: false, bordered: true },
    ],
  },
  intro: {
    eyebrow: "D.Lab(대성학원) MAIN PAGE",
    paragraph:
      "핵심 서비스를 한번에 파악할 수 있도록 정보의 흐름과 우선순위를 먼저 정리하고,\n학생들이 화면을 보는 순간 필요한 정보를 빠르게 파악할 수 있도록 UI를 구성했습니다.",
  },
  mockPreview: {
    src: "/images/web/daeseong-kiosk/showcase-794612.png",
    alt: "D.Lab 대성학원 키오스크 미리보기",
    bleed: true,
  },
};
