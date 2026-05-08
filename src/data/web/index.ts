import type {
  WebHero,
  WebFeatures,
  WebPortfolio,
  WebCTA,
} from "@/types/web";

export const webHero: WebHero = {
  title: "웹·개발",
  desc: "기획부터 개발까지 하나의 흐름으로 브랜드의 방향성과 비즈니스 구조에 맞춰 맞춤형으로 설계합니다.",
  breadcrumb: "웹·개발",
  bg: "/images/web/hero-bg.png",
};

export const webFeatures: WebFeatures = {
  eyebrow: "Custom Web & Software",
  title: "홈페이지부터 프로그램까지\n고객이 필요로 하는 모든 웹·프로그램 개발",
  images: [
    { src: "/images/web/feature-1.png", alt: "" },
    { src: "/images/web/feature-2.png", alt: "" },
    { src: "/images/web/feature-3.png", alt: "" },
  ],
  cards: [
    {
      eyebrow: "01",
      title: "시그널디코드만의 강점",
      desc: "브랜드의 정체성이 담긴 UI/UX 디자인은 물론, 사용자가 처음 진입해 최종 목적(문의, 결제, 정보 습득 등)에 도달하기까지의 경로를 공학적으로 설계합니다. 복잡한 동선을 단순화하여 사용자가 서비스에 자연스럽게 몰입할 수 있는 환경을 만듭니다.\n\n만드는 사람의 편의가 아닌, 실제 관리자가 운영하기 편하고 사용자가 이용하기 직관적인 시스템을 구축합니다. 기획 단계부터 기술적 실현 가능성과 운영 효율을 동시에 고려하여, 제작 이후에도 비즈니스가 막힘없이 돌아갈 수 있는 기술적 토대를 제공합니다.",
      icon: "/images/web/strength-icon-1.svg",
    },
    {
      eyebrow: "02",
      title: "브랜드 맞춤 웹·개발",
      desc: "단순한 게시판부터 복잡한 관리 시스템, 실시간 데이터 트래킹, 외부 API 연동 및 결제 모듈까지 비즈니스 운영에 필요한 모든 기능을 직접 코드로 구현합니다. 특히, 기성 빌더의 한계를 넘어선 커스텀 개발을 통해 사이트의 속도와 안정성을 확보하며, 향후 비즈니스 확장에 유연하게 대응할 수 있는 구조를 지향합니다.\n\n기획부터 디자인, 복합적인 기능 구현까지. 시그널디코드는 귀사의 사업 모델이 웹과 프로그램이라는 그릇에 가장 온전하게 담길 수 있도록 연구합니다.",
      icon: "/images/web/strength-icon-2.svg",
    },
  ],
};

export const webPortfolio: WebPortfolio = {
  eyebrow: "Signature Portfolio",
  title: "시그널디코드의 엄선된 프로젝트",
  desc: "웹사이트, UI/UX, 모바일 등 세심한 디테일로 브랜드의 자부심을 극대화하여 완성된 시그널디코드의 대표 프로젝트",
  items: [
    { brand: "정성 SR", image: "/images/portfolio/정성SR.jpg" },
    { brand: "대성학원", image: "/images/portfolio/대성학원.jpg" },
    { brand: "청춘만사성", image: "/images/portfolio/청춘만사성.jpg" },
    { brand: "이음푸드", image: "/images/portfolio/이음푸드.jpg" },
    { brand: "제로랩스", image: "/images/portfolio/제로랩스.jpg" },
  ],
};

export const webCTA: WebCTA = {
  title: "광고는 하고 있는데, 성과가 잘 안 나오고 계신가요?",
  desc: "단순 노출 중심 광고가 아닌, 실제 전환과 성과로 이어질 수 있는 마케팅 구조를 설계합니다.",
  bg: "/images/web/cta-bg.png",
  link: { href: "/marketing", label: "마케팅 서비스 알아보기" },
};
