export type Card = {
  label: string;
  pillLabel: string;
  subtitle: string;
  desc: string;
};

export type ChannelKey =
  | "naver"
  | "google"
  | "sns"
  | "video"
  | "influencer"
  | "design"
  | "business";

export type Channel = {
  key: ChannelKey;
  label: string;
  pillLabel: string;
  brand: string;
  kicker: string;
  title: string;
  cardImage?: string;
  cardGradient?: string;
  cards: Card[];
  ctaTitle: string;
  ctaDesc: string;
  ctaLink: { href: string; label: string };
};
