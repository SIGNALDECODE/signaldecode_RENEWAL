export type HeroData = {
  video: { src: string; type: string };
  meta: string[];
  brand: string;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  desc: string | string[];
};

export type ValueCard = {
  num: string;
  img: string;
  title: string;
  desc: string;
};

export type PhoneSliderModeKey = "marketing" | "dev";

export type PhoneSliderData = {
  copy: SectionCopy;
  toggle: { marketing: string; dev: string };
  slides: string[];
  more: string;
};

export type IntegrationCard = {
  eyebrow: string;
  title: string;
  desc: string;
  img: string;
  href?: string;
};

export type IntegrationData = {
  copy: SectionCopy;
  more: string;
  cards: IntegrationCard[];
};

export type QuoteRow = {
  left: string;
  img: string;
  right: string;
};

export type PartnerCard = {
  title: string;
  desc: string;
  tags: string[];
  logo: string;
};

export type PartnersData = {
  copy: SectionCopy;
  logos: string[];
  cards: PartnerCard[];
};

export type SalesData = {
  copy: SectionCopy;
  finalNumber: string;
  coins: { topRight: string; bottomLeft: string };
};

export type ProfessionalRow = {
  name: string;
  sub: string;
  tag?: string;
  price?: string;
  delta?: { value: string; direction: "up" | "down" };
};

export type ProfessionalData = {
  copy: SectionCopy;
  avatar: string;
  rows: ProfessionalRow[];
};

export type PerformanceChartData = {
  copy: SectionCopy;
  bars: {
    own: { label: string; height: string; callout: string };
    competitor: { label: string; height: string; percent: string };
    industry: { label: string; height: string; percent: string };
  };
};
