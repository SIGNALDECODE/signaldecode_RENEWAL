import type { IntegrationData } from "@/types/landing";

export const integration: IntegrationData = {
  copy: {
    eyebrow: "INTEGRATION",
    title: "시그널디코드 사업소개",
    desc: "데이터 기반의 매체 전략, 감각적인 영상 제작, 고도화된 웹 구축을 통해 비즈니스 성공에 필요한\n모든 디지털 터치포인트를 유기적으로 연결합니다",
  },
  more: "더보기",
  cards: [
    {
      eyebrow: "Marketing",
      title: "마케팅 상품소개",
      desc: "퍼포먼스 광고부터 브랜드 콘텐츠까지, 데이터에 기반한 매체 전략으로 비즈니스 성과를 만듭니다.",
      img: "/images/integration/marketing.png",
      href: "/marketing",
    },
    {
      eyebrow: "Video",
      title: "영상 제작 소개",
      desc: "브랜드의 메시지를 가장 인상적으로 전달하는 감각적인 영상을 기획·제작합니다.",
      img: "/images/integration/video.png",
    },
    {
      eyebrow: "Web",
      title: "웹/개발 소개",
      desc: "사용자 경험을 중심으로, 비즈니스에 최적화된 웹 환경을 설계하고 구축합니다.",
      img: "/images/integration/web.png",
    },
  ],
};
