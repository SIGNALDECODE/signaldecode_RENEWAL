import type { ProfessionalData } from "@/types/landing";

export const professional: ProfessionalData = {
  copy: {
    eyebrow: "PROFESSIONAL",
    title: "데이터로 증명하는 퍼포먼스 마케팅 솔루션",
    desc: "귀사의 비즈니스 성장을 가속화할 최적의 인재들을 엄선하여 데이터 기반의 리스트로 제공합니다. 복잡한 탐색 과정 없이 업종별 정교한 필터링 시스템을 활용합니다.",
  },
  avatar: "/icons/avatar.png",
  rows: [
    { name: "퍼포먼스 마케터", sub: "BTC", tag: "음식점" },
    {
      name: "글로벌 마케터",
      sub: "BTC",
      price: "$2,509.75",
      delta: { value: "-5.5%", direction: "down" },
    },
    {
      name: "글로벌 마케터",
      sub: "BTC",
      price: "$2,509.75",
      delta: { value: "+2.5%", direction: "up" },
    },
    {
      name: "글로벌 마케터",
      sub: "BTC",
      price: "$2,509.75",
      delta: { value: "-4.6%", direction: "down" },
    },
  ],
};
