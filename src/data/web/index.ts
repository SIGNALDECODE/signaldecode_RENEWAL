import type {
  WebHero,
  WebFeatures,
  WebPortfolio,
} from "@/types/web";

export const webHero: WebHero = {
  title: "웹·개발",
  desc: "기획부터 개발까지 하나의 흐름으로 브랜드의 방향성과\n비즈니스 구조에 맞춰 맞춤형으로 설계합니다.",
  breadcrumb: "웹·개발",
  bg: "/images/web/hero-bg.png",
};

export const webFeatures: WebFeatures = {
  eyebrow: "Custom Web & Software",
  title: "홈페이지부터 프로그램까지\n고객이 필요로 하는 모든 웹·프로그램 개발",
  cards: [
    {
      title: "전환을 고려한 UX 설계",
      desc: "예쁜 디자인보다 고객의 사용 동선을 고려한 웹을 설계합니다.",
      image: "/images/web/features/feature-ux-211406.png",
    },
    {
      title: "맞춤형 커스텀 개발",
      desc: "브랜드의 비즈니스 구조에 맞게 맞춤형 솔루션을 제공합니다.",
      image: "/images/web/features/feature-custom-4b3019.png",
    },
    {
      title: "운영을 반영한 시스템 구축",
      desc: "관리자가 편한 구조로 웹 시스템을 직접 개발합니다.",
      image: "/images/web/features/feature-ops-298f8b.png",
    },
    {
      title: "확장 가능한 기술 구조",
      desc: "목적 도달까지 자연스러운 흐름과 확장 구조를 설계합니다.",
      image: "/images/web/features/feature-scale-6e11f9.png",
    },
  ],
};

export const webPortfolio: WebPortfolio = {
  eyebrow: "Signature Portfolio",
  title: "시그널디코드의 엄선된 프로젝트",
  desc: "웹사이트, UI/UX, 모바일 등 세심한 디테일로 브랜드의 자부심을 극대화하여 완성된 시그널디코드의 대표 프로젝트",
  items: [
    {
      brand: "정성 SR",
      subtitle: "브랜드 소개 문구 텍스트",
      tag: "UIUX 디자인",
      image: "/images/portfolio/정성SR.jpg",
      href: "/web/jeongseong-sr",
    },
    {
      brand: "대성학원 매출프로그램",
      subtitle: "대학 입시 재수학원",
      tag: "프로그램 개발",
      image: "/images/portfolio/대성학원.jpg",
      href: "/web/daeseong-sales",
    },
    {
      brand: "청춘만사성",
      subtitle: "시니어 정비 전문 업체",
      tag: "UIUX 디자인",
      image: "/images/portfolio/청춘만사성.jpg",
      href: "/web/cheongchun",
    },
    {
      brand: "이음푸드",
      subtitle: "단체급식·케이터링 공급 전문 기업",
      tag: "UIUX 디자인",
      image: "/images/portfolio/이음푸드.jpg",
      href: "/web/eumfood",
    },
    {
      brand: "제로랩스",
      subtitle: "애견 간식 브랜드",
      tag: "UIUX 디자인 및 웹 개발",
      image: "/images/portfolio/제로랩스.jpg",
      href: "/web/zerolabs",
    },
    {
      brand: "대성학원 키오스크",
      subtitle: "대학 입시 재수학원",
      tag: "프로그램 개발",
      image: "/images/portfolio/대성학원_키오스크.jpg",
      href: "/web/daeseong-kiosk",
    },
  ],
};
