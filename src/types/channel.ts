export type CardVariant = "phone" | "search" | "map";

export type Card = {
  tag: string;
  title: string;
  desc: string;
  variant?: CardVariant;
  searchTerm?: string;
  brand?: string;
  tint?: string;
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
  tint?: string;
  cards: Card[];
};
