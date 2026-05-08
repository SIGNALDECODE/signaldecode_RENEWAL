import type { WebProjectDetail } from "@/types/web";

export const cheongchun: WebProjectDetail = {
  slug: "cheongchun",
  brand: "청춘만사성",
  brandAccent: "#FF5A1C",
  pageNumber: "5",
  heroBg: "/images/web/hero/eumfood.png",
  hero: {
    title: "청춘만사성",
    paragraphs: [
      "핵심 서비스를 한번에 파악할 수 있도록 정보의 흐름과 우선순위를 먼저 정리하고, 사용자가 화면을 보는 순간 필요한 내용을 직관적으로 파악할 수 있도록 UI를 구성했습니다.",
    ],
    meta: [
      { label: "Project", value: "시니어 정비 전문 업체" },
      { label: "Role", value: "Website" },
      { label: "Contribution", value: "100%(1인 작업)" },
      { label: "Tools", value: "Figma" },
      { label: "Period", value: "2026.04 – 2026.05" },
    ],
  },
  coreValue: {
    eyebrow: "core value",
    title: "신뢰 기반의 **4가지 키워드**",
    subParagraph: "",
    cards: [
      {
        num: "01",
        title: "전문성 강화",
        desc: "숙련된 시니어 전문가들의 경험을 효과적으로 전달",
      },
      {
        num: "02",
        title: "직관적인 정보",
        desc: "핵심 서비스 정보를 한눈에 파악하기 쉽게 구성",
      },
      {
        num: "03",
        title: "현장 중심 콘텐츠",
        desc: "실제 작업 환경 중심 콘텐츠로 신뢰도 높임",
      },
      {
        num: "04",
        title: "사용자 중심 흐름",
        desc: "상담과 서비스 연결 과정을 간결하게 설계",
      },
    ],
  },
  typography: {
    eyebrow: "typography",
    title: "정보 전달을 위한, **프리텐다드**",
    subParagraph: "",
    specimens: [
      {
        weight: "Semibold",
        display: "CHEONGCHUN",
        sample: "인생의 2막, 진심 어린 시니어 정비 마스터",
        specs: [
          { label: "Font Weight", value: "Semibold" },
          { label: "Html Tag", value: "H1 H2 H3 H4 SPAN" },
          { label: "Letter Spacing", value: "-2.5%" },
          { label: "Font Size", value: "34 28 24 20" },
        ],
      },
      {
        weight: "Medium",
        display: "CHEONGCHUN",
        sample: "인생의 2막, 진심 어린 시니어 정비 마스터",
        specs: [
          { label: "Font Weight", value: "Medium" },
          { label: "Html Tag", value: "SUB H1 SUB H2 P" },
          { label: "Letter Spacing", value: "-2.5%" },
          { label: "Font Size", value: "24 20 18 16" },
        ],
      },
      {
        weight: "Regular",
        display: "CHEONGCHUN",
        sample: "인생의 2막, 진심 어린 시니어 정비 마스터",
        specs: [
          { label: "Font Weight", value: "Regular" },
          { label: "Html Tag", value: "A P" },
          { label: "Letter Spacing", value: "-2.5%" },
          { label: "Font Size", value: "20 18 16 14" },
        ],
      },
    ],
  },
  color: {
    eyebrow: "color style",
    title: "핵심 서비스가 **한눈에 파악되는**",
    subParagraph: "",
    swatches: [
      { hex: "#FF5A1C", flex: 530, labelOnDark: true },
      { hex: "#222222", flex: 348, labelOnDark: true },
      { hex: "#434343", flex: 311, labelOnDark: true },
      { hex: "#767676", flex: 219, labelOnDark: true },
      { hex: "#FFFFFF", flex: 200, labelOnDark: false, bordered: true },
    ],
  },
  intro: {
    eyebrow: "CHEONGCHUN MAIN PAGE",
    paragraph:
      "핵심 서비스를 한번에 파악할 수 있도록 정보의 흐름과 우선순위를 먼저 정리하고,\n사용자가 화면을 보는 순간 필요한 내용을 직관적으로 파악할 수 있도록 UI를 구성했습니다.",
  },
  mockPreview: {
    src: "/images/web/preview/cheongchun.png",
    alt: "청춘만사성 메인 페이지 미리보기",
  },
};
