import type { WebProjectDetail } from "@/types/web";

export const zerolabs: WebProjectDetail = {
  slug: "zerolabs",
  brand: "제로랩스",
  brandAccent: "#3D6B4F",
  pageNumber: "4",
  heroBg: "/images/web/hero/eumfood.png",
  hero: {
    title: "제로랩스",
    paragraphs: [
      "이커머스 환경의 특성을 반영하여 원하는 제품을 한눈에 파악할 수 있도록 정보의 흐름과 우선순위를 정리하고, 소비자의 구매를 유도할 수 있는 다양한 콘텐츠를 배치하고 캐릭터를 적극적으로 활용하여 시각적인 지루함을 최소화한 UI를 설계했습니다.",
    ],
    meta: [
      { label: "Project", value: "반려견 간식 브랜드" },
      { label: "Role", value: "Website" },
      { label: "Contribution", value: "100%(1인 작업)" },
      { label: "Tools", value: "Figma" },
      { label: "Period", value: "2026.04 – 2026.05" },
    ],
  },
  coreValue: {
    eyebrow: "core value",
    title: "구매에 최적화된 **4가지 키워드**",
    subParagraph: "",
    cards: [
      {
        num: "01",
        title: "구매 과정의 최소화",
        desc: "불필요한 탐색 과정을 줄여 편리한 구매 경험 제공",
      },
      {
        num: "02",
        title: "핵심 정보 전달",
        desc: "제품의 특성 및 혜택을 한눈에 이해할 수 있는 구조",
      },
      {
        num: "03",
        title: "레이아웃의 변화",
        desc: "시각적 지루함 최소화 및 정보의 우선순위를 고려한 구조",
      },
      {
        num: "04",
        title: "몰입도 높은 콘텐츠",
        desc: "캐릭터와 프로모션 콘텐츠를 활용해 브랜드 경험 강화",
      },
    ],
  },
  typography: {
    eyebrow: "typography",
    title: "가독성 높은, **프리텐다드**",
    subParagraph: "",
    specimens: [
      {
        weight: "Semibold",
        display: "ZEROLABS",
        sample: "반려견의 건강 상태를 고려한 천연 원료 레시피",
        specs: [
          { label: "Font Weight", value: "Semibold" },
          { label: "Html Tag", value: "H1 H2 H3 H4 SPAN" },
          { label: "Letter Spacing", value: "-2.5%" },
          { label: "Font Size", value: "48 36 34 20" },
        ],
      },
      {
        weight: "Medium",
        display: "ZEROLABS",
        sample: "반려견의 건강 상태를 고려한 천연 원료 레시피",
        specs: [
          { label: "Font Weight", value: "Medium" },
          { label: "Html Tag", value: "SUB H1 H5 P" },
          { label: "Letter Spacing", value: "-2.5%" },
          { label: "Font Size", value: "20 16 14" },
        ],
      },
      {
        weight: "Regular",
        display: "ZEROLABS",
        sample: "반려견의 건강 상태를 고려한 천연 원료 레시피",
        specs: [
          { label: "Font Weight", value: "Regular" },
          { label: "Html Tag", value: "A P" },
          { label: "Letter Spacing", value: "-2.5%" },
          { label: "Font Size", value: "28 24 20 18 16 14" },
        ],
      },
    ],
  },
  color: {
    eyebrow: "color style",
    title: "전문성을 **더 돋보이게**",
    subParagraph: "",
    swatches: [
      { hex: "#3D6B4F", flex: 530, labelOnDark: true },
      { hex: "#262626", flex: 348, labelOnDark: true },
      { hex: "#454545", flex: 311, labelOnDark: true },
      { hex: "#666666", flex: 219, labelOnDark: true },
      { hex: "#FFFFFF", flex: 200, labelOnDark: false, bordered: true },
    ],
  },
  intro: {
    eyebrow: "ZEROLABS MAIN PAGE",
    paragraph:
      "이커머스 환경의 특성을 반영하여 원하는 제품을 한눈에 파악할 수 있도록 정보의 흐름과 우선순위를 정리하고,\n소비자의 구매를 유도할 수 있는 다양한 콘텐츠를 배치한 UI를 설계했습니다.",
  },
  mockPreview: {
    src: "/images/web/preview/zerolabs.png",
    alt: "제로랩스 자사몰 미리보기",
  },
};
