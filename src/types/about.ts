export type AboutHero = {
  giantText: string;
  bg: string;
  megaphone: string;
  title: string;
  desc: string;
};

export type AboutTagline = {
  lines: { left: string; right: string; bar: string }[];
  desc: string;
};

export type AboutBusinessCard = {
  num: string;
  title: string;
  desc: string;
};

export type AboutBusinessIntro = {
  eyebrow: string;
  title: string;
  cards: AboutBusinessCard[];
};

export type AboutOverview = {
  eyebrow: string;
  title: string;
  desc: string;
};

export type AboutValuePillar = {
  icon: string;
  label: string;
  caption: string;
  title: string;
  desc: string;
};

export type AboutFeatureSection = {
  eyebrow: string;
  title: string;
  desc: string;
  bg: string;
  align: "left" | "right";
};

export type AboutKeyword = {
  title: string;
  desc: string;
};

export type AboutKeywords = {
  eyebrow: string;
  title: string;
  desc: string;
  cards: AboutKeyword[];
};

export type AboutMegaphone = {
  image: string;
  title: string;
  desc: string;
};

export type AboutMarquee = {
  text: string;
};
