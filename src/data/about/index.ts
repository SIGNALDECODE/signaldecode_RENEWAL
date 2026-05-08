import type {
  AboutHero,
  AboutTagline,
  AboutBusinessIntro,
  AboutOverview,
  AboutValuePillar,
  AboutFeatureSection,
  AboutKeywords,
  AboutMegaphone,
  AboutMarquee,
  AboutDivider,
} from "@/types/about";

export const aboutHero: AboutHero = {
  giantText: "WHO WE ARE SIGNALDECODE",
  bg: "/images/about/hero-bg.png",
  megaphone: "/images/about/megaphone-3881ae1.png",
  title:
    "데이터 기반의 통찰력으로 비즈니스 성장을 견인하는 풀스택 광고대행사 파트너입니다.",
  desc: "단순한 광고 대행의 범주를 넘어, 시장과 소비자가 보내는 미세한 데이터 신호를 정교하게 분석하여 비즈니스의 핵심 가치를 도출합니다.",
};

export const aboutTagline: AboutTagline = {
  lines: [
    { left: "Unlocking", right: "the Value", bar: "/images/about/tagline-bar-1.png" },
    { left: "Within", right: "Every Signal", bar: "/images/about/aboutbg.png" },
  ],
  desc: "모든 비즈니스 신호 속에 숨겨진 가치를 발견하여, 지속 가능한 성장의 기회로 깨우다.",
};

export const aboutBusinessIntro: AboutBusinessIntro = {
  eyebrow: "Business Description",
  title: "시그널 코드의 사업소개",
  cards: [
    {
      num: "01",
      title: "마케팅",
      desc: "복잡한 마케팅 고민을 명쾌한 비주얼과 데이터 기반의 고효율 솔루션으로 해결해 드립니다.",
    },
    {
      num: "02",
      title: "영상제작",
      desc: "영상이 끝난 뒤 사용자의 행동이나 감정 변화를 이끌어낼 수 있다는 전문성을 어필합니다.",
    },
    {
      num: "03",
      title: "웹·개발",
      desc: "여러 곳에 맡길 필요 없이 한 곳에서 고퀄리티의\n통합 브랜딩이 가능하다는 편의성을 강조합니다.",
    },
  ],
};

export const aboutOverview: AboutOverview = {
  eyebrow: "OVERVIEW",
  title: "광고부터 웹 개발까지, 끊김 없는 최적의 브랜드 경험을 설계",
  desc: "각 분야 전문가들의 기획과 기술력을 결합하여, 단순한 제작을 넘어 비즈니스의 실질적인 성과를 만듭니다.",
  image: "/images/about/overview-hero-29cf94.png",
};

export const aboutValuePillars: AboutValuePillar[] = [
  {
    icon: "/images/about/icon-aesthetic.png",
    label: "AESTHETIC",
    caption: "브랜드 본질을 담은 하이엔드 비주얼",
    title: "절제된 미학, 본질의 시각화.",
    desc: "단순히 정보를 전달하는 웹사이트의 기능을 넘어, 브랜드가 가진 고유한 서사와 본질을 깊이 있게 통찰합니다. 보는 이의 시선을 압도하고 브랜드의 품격을 완성하는 독보적인 미학적 결과물을 구현합니다.",
  },
  {
    icon: "/images/about/icon-aesthetic.png",
    label: "STRATEGY",
    caption: "시장을 움직이는 전략적 디자인",
    title: "현상을 관통하는 예리한 시선.",
    desc: "타겟 고객의 행동 패턴을 철저히 분석한 마케팅의 정교한 전략적 설계와, 이를 직관적으로 경험하게 만드는 감각적인 디자인 기술이 하나로 융합됩니다. 나아가 시장의 판도를 바꾸는 영향력 있는 브랜드 파워를 창출합니다.",
  },
  {
    icon: "/images/about/icon-aesthetic.png",
    label: "GROWTH",
    caption: "기술력을 통한 무한한 비즈니스 확장",
    title: "한계를 넘어 도약하는 무한한 궤적.",
    desc: "트렌드를 선도하는 유연하고 견고한 아키텍처와, 타협하지 않는 최상의 기술적 완성도를 바탕으로 강력한 디지털 생태계를 구축합니다. 변화하는 시장 환경에 유연하게 대응하며 끊임없이 확장하고 성장할 수 있도록 지원합니다.",
  },
];

export const aboutFeatureSections: AboutFeatureSection[] = [
  {
    eyebrow: "Marketing",
    title: "브랜드 자산을 키우는 가장 확실한 마케팅 솔루션",
    desc: "단기적인 성과를 넘어 브랜드가 시장에서 가질 수 있는 고유한 위상과 지속 가능한 가치를 설계합니다. 우리는 정교한 마케팅 전략과 차별화된 디지털 경험을 결합하여, 시간이 흐를수록 고객의 신뢰가 쌓이고 비즈니스의 무형 자산이 극대화되는 강력한 브랜드 에퀴티를 구축합니다.",
    bg: "/images/about/section-brand.png",
    align: "left",
  },
  {
    eyebrow: "Video",
    title: "시선을 넘어 행동으로, 비디오 어포던스 구현",
    desc: "사용자가 매뉴얼 없이도 웹사이트의 모든 기능을 본능적으로 이해하고 사용할 수 있도록 최적의 행동 유도성을 설계합니다. 우리는 시각적 대비, 물리적 특성의 모사, 그리고 심리적 흐름을 고려한 디자인 장치들을 정교하게 배치하여, 고객이 디지털 공간에서 길을 잃지 않고 비즈니스가 의도한 목표 지점까지 물 흐르듯 도달하게 만듭니다.",
    bg: "/images/about/section-video.png",
    align: "right",
  },
  {
    eyebrow: "Web Development",
    title: "전환을 높이는 데이터 기반 UI 디벨롭",
    desc: "비즈니스의 급격한 성장과 트래픽 증가에도 흔들림 없는 안정성을 보장하기 위해, 보이지 않는 곳의 핵심 엔진인 백엔드 로직을 정교하게 재설계합니다. 우리는 마이크로서비스 아키텍처(MSA)와 최적화된 데이터베이스 설계를 바탕으로 시스템의 부하를 최소화하며, 향후 어떤 비즈니스 변화에도 즉각적으로 대응하고 확장할 수 있는 유연한 기술적 토대를 완성합니다.",
    bg: "/images/about/section-web.png",
    align: "left",
  },
];

export const aboutKeywords: AboutKeywords = {
  eyebrow: "keyword",
  title: "종합광고대행사 스케일을 바꾸는 통합 솔루션",
  desc: "시장을 읽는 정교한 전략과 이를 현실로 구현하는 독보적인 기술력이 만나, 비즈니스의\n새로운 가능성을 설계합니다.",
  cards: [
    { title: "솔루션 (Solution)", desc: "비즈니스의 막막한 한계를 넘어서는 가장 명쾌한\n정답을 설계합니다." },
    { title: "캠페인 (Campaign)", desc: "영상에서 웹까지, 단 하나의 메시지로 브랜드의 일관된\n흐름을 만듭니다." },
    { title: "크리에이티브 (Creative)", desc: "시선을 사로잡는 감각과 마음을 움직이는 아이디어로\n시장의 판도를 바꿉니다." },
    { title: "퍼포먼스 (Performance)", desc: "단순한 노출을 넘어, 데이터로 증명되는 실질적인\n비즈니스 성장을 실현합니다." },
    { title: "브랜딩 (Branding)", desc: "디테일한 사용자 경험 속에 브랜드 고유의 철학과 가치를\n깊게 각인시킵니다." },
    { title: "파트너십 (Partnership)", desc: "클라이언트의 성공을 우리 최고의 성과로 믿고 함께 달리는\n든든한 러닝메이트가 됩니다." },
  ],
};

export const aboutMegaphone: AboutMegaphone = {
  image: "/images/about/megaphone.png",
  title: "데이터 기반의 통찰력으로 비즈니스 성장을 견인하는 풀스택 광고대행사 파트너입니다.",
  desc: "단순한 광고 대행의 범주를 넘어, 시장과 소비자가 보내는 미세한 데이터 신호를 정교하게 분석하여 비즈니스의 핵심 가치를 도출합니다.",
};

export const aboutMarquee: AboutMarquee = {
  text: "SIGNAL DECODE",
};

export const aboutDivider: AboutDivider = {
  marqueeText: "SIGNAL DECODE SIGNAL DECODE",
  bg: "/images/about/aboutbg.png",
};
