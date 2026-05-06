import type { PartnersData } from "@/types/landing";

const sampleCard = {
  title: "타이틀",
  desc: "서브타이서브타이틀서브타이틀서브타이틀서서브타이틀서브타이틀브타이틀틀",
  tags: ["#키워드", "#키워드"],
};

const logos = ["/icons/eumfood_logo.png", "/images/stancegym_logo.png"];

export const partners: PartnersData = {
  copy: {
    eyebrow: "SUB TITLE",
    title: "최고의 선택, 결과로 증명하는 파트너사",
    desc: [
      "단순한 협력을 넘어 파트너사의 성장을 최우선으로 생각합니다.",
      "이미 수많은 기업이 시그널디코드와 함께하며 시장에서의 독보적인 성과를 경험하고 있습니다.",
    ],
  },
  logos,
  cards: Array.from({ length: 12 }).map((_, i) => ({
    ...sampleCard,
    logo: logos[i % logos.length],
  })),
};
