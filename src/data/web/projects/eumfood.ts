import type { WebProjectDetail } from "@/types/web";

export const eumfood: WebProjectDetail = {
  slug: "eumfood",
  brand: "이음푸드시스템",
  brandAccent: "#FF5D27",
  pageNumber: "3",
  heroBg: "/images/web/hero/eumfood.png",
  hero: {
    title: "이음푸드시스템",
    paragraphs: [
      "레이아웃은 명확한 시각적 위계를 기반으로 설계하여 정보의 흐름이 직관적으로 이어지도록 구성하며, 브랜드가 전달하고자 하는 메시지가 효과적으로 인지될 수 있도록 구조화합니다.",
      "과도하게 무거운 인상을 지양하고 적절한 Border Radius를 활용하여 부드러운 인상을 부여함으로써, 브랜드에 대한 심리적 거리감을 낮추고 친근하고 편안한 사용자 경험을 유도합니다.",
      "레이아웃은 명확한 시각적 위계를 기반으로 설계하고 정보의 흐름이 직관적으로 이어지도록 구성하여 브랜드가 전달하고자 하는 메시지가 효과적으로 인지될 수 있도록 디자인하였습니다.",
    ],
    meta: [
      { label: "Project", value: "이음푸드시스템 기업 사이트 리뉴얼" },
      { label: "Role", value: "Website" },
      { label: "Contribution", value: "100%(1인 작업)" },
      { label: "Tools", value: "Figma" },
      { label: "Period", value: "2026.01 – 2026.02" },
    ],
  },
  coreValue: {
    eyebrow: "core value",
    title: "기업을 이해하는 **4가지 키워드**",
    subParagraph:
      "가독성과 명확한 정보 전달을 최우선으로 고려한 UI 구조를 기반으로 설계하였습니다.\n불필요한 시각적 요소를 배제하고 정돈된 레이아웃을 적용함으로써 사용자가 핵심 메시지에 자연스럽게 집중할 수 있도록 구성하였습니다.",
    cards: [
      {
        num: "01",
        title: "직관적인 구조",
        desc: "필요한 정보가 한눈에 들어오는 경험을 제공",
      },
      {
        num: "02",
        title: "전문성 중심 콘텐츠",
        desc: "기업의 경험과 운영 노하우를 신뢰감 있게 전달",
      },
      {
        num: "03",
        title: "높은 정보 전달력",
        desc: "핵심 정보를 명확히 전달하도록 설계",
      },
      {
        num: "04",
        title: "인터렉션 요소",
        desc: "부드러운 움직임과 반응형 효과로 높은 몰입도 제공",
      },
    ],
  },
  typography: {
    eyebrow: "typography",
    title: "정보 전달에 집중한, **프리텐다드**",
    subParagraph:
      "불필요한 요소를 배제한 정제된 형태와 높은 가독성을 바탕으로, 콘텐츠와 정보 전달에 집중할 수 있는 화면을 만들기 위해\n프리텐다드 폰트를 사용했습니다.",
    specimens: [
      {
        weight: "Bold",
        display: "EUMFOOD",
        sample: "하루의 시작과 끝, 식탁 위 따뜻한 식사를 위한 신선한 제품",
        specs: [
          { label: "Font Weight", value: "Bold" },
          { label: "Html Tag", value: "H1 H2 H3 H4" },
          { label: "Letter Spacing", value: "-2.5%" },
          { label: "Font Size", value: "42 38 32" },
        ],
      },
      {
        weight: "Medium",
        display: "EUMFOOD",
        sample: "하루의 시작과 끝, 식탁 위 따뜻한 식사를 위한 신선한 제품",
        specs: [
          { label: "Font Weight", value: "Medium" },
          { label: "Html Tag", value: "H4 H5 BUTTON P" },
          { label: "Letter Spacing", value: "-2.5%" },
          { label: "Font Size", value: "24 20 18 16" },
        ],
      },
      {
        weight: "Regular",
        display: "EUMFOOD",
        sample: "하루의 시작과 끝, 식탁 위 따뜻한 식사를 위한 신선한 제품",
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
    title: "밝음 속에서 **더 또렷해지는**",
    subParagraph:
      "화이트 배경을 기반으로 오렌지 컬러를 포인트로 사용해, 정보의 우선순위와 시선을 명확하게 구분했습니다.\n밝은 화면 속에서도 컬러가 과하지 않게 기능하며, 핵심 정보를 보다 직관적으로 인지할 수 있도록 설계했습니다.",
    swatches: [
      { hex: "#FF5D27", flex: 530, labelOnDark: true },
      { hex: "#222222", flex: 348, labelOnDark: true },
      { hex: "#505050", flex: 311, labelOnDark: true },
      { hex: "#767676", flex: 219, labelOnDark: true },
      { hex: "#FFFFFF", flex: 200, labelOnDark: false, bordered: true },
    ],
  },
  intro: {
    eyebrow: "EUMFOOD MAIN PAGE",
    paragraph:
      "기업 정보를 보다 손쉽게 확인할 수 있도록 정보의 흐름과 우선순위를 먼저 정리하고, 사용자가 화면을 보는 순간 필요한 내용을\n직관적으로 파악할 수 있도록 UI를 구성했습니다.",
  },
  mockPreview: {
    src: "/images/web/preview/eumfood.png",
    alt: "이음푸드시스템 메인 페이지 미리보기",
  },
};
