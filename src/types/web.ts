export type WebHero = {
  title: string;
  desc: string;
  breadcrumb: string;
  bg: string;
};

export type WebFeatureCard = {
  eyebrow: string;
  title: string;
  desc: string;
  icon: string;
};

export type WebFeatures = {
  eyebrow: string;
  title: string;
  images: { src: string; alt: string }[];
  cards: WebFeatureCard[];
};

export type WebPortfolioItem = {
  brand: string;
  image: string;
};

export type WebPortfolio = {
  eyebrow: string;
  title: string;
  desc: string;
  items: WebPortfolioItem[];
};

export type WebCTA = {
  title: string;
  desc: string;
  bg: string;
  link: { href: string; label: string };
};

export type WebMetaItem = { label: string; value: string };

export type WebCoreValueCard = {
  num: string;
  title: string;
  desc: string;
};

export type WebTypoSpecimen = {
  weight: string;
  display: string;
  sample: string;
  specs: { label: string; value: string }[];
};

export type WebColorSwatch = {
  hex: string;
};

export type WebColorSwatchSpec = {
  hex: string;
  flex: number;
  labelOnDark?: boolean;
  bordered?: boolean;
};

export type WebProjectDetail = {
  slug: string;
  brand: string;
  brandAccent: string;
  pageNumber: string;
  heroBg: string;
  hero: {
    title: string;
    paragraphs: string[];
    meta: WebMetaItem[];
  };
  coreValue: {
    eyebrow: string;
    title: string;
    subParagraph: string;
    cards: WebCoreValueCard[];
  };
  typography: {
    eyebrow: string;
    title: string;
    subParagraph: string;
    specimens: WebTypoSpecimen[];
  };
  color: {
    eyebrow: string;
    title: string;
    subParagraph: string;
    swatches: WebColorSwatchSpec[];
  };
  intro: {
    eyebrow: string;
    paragraph: string;
  };
  mockPreview: { src: string; alt: string };
};
