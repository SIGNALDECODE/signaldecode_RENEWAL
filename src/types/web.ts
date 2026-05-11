export type WebHero = {
  title: string;
  desc: string;
  breadcrumb: string;
  bg: string;
};

export type WebFeatureCard = {
  title: string;
  desc: string;
  image: string;
};

export type WebFeatures = {
  eyebrow: string;
  title: string;
  cards: WebFeatureCard[];
};

export type WebPortfolioItem = {
  brand: string;
  subtitle: string;
  tag: string;
  image: string;
  href: string;
};

export type WebPortfolio = {
  eyebrow: string;
  title: string;
  desc: string;
  items: WebPortfolioItem[];
};

export type WebMetaItem = { label: string; value: string };

export type WebCoreValueCard = {
  num: string;
  title: string;
  desc: string;
  icon?: string;
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
    subtitle?: string;
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
    // When present, render a single specimen row with this large decorative
    // text on the right side (replacing the spec-chip grid). Used by pages
    // whose Figma typography section showcases the Korean alphabet (e.g.
    // "가나다") at huge ExtraBold size instead of detailed spec chips.
    decoration?: string;
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
  mockPreview: {
    src: string;
    alt: string;
    // When true, render the showcase image full-bleed (no rounded card / no
    // container max-width) — used for project mocks designed as wide hero
    // photos rather than the standard rounded mockup card.
    bleed?: boolean;
  };
};
