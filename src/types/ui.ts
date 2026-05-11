export type NavLink = {
  label: string;
  href: string;
  comingSoon?: boolean;
};

export type HeaderData = {
  logo: { src: string; alt: string };
  brand: string;
  nav: NavLink[];
  cta: { label: string; href: string };
  comingSoonLabel: string;
};

export type FooterField = {
  label: string;
  value: string;
};

export type FooterData = {
  source: {
    title: string;
    fields: FooterField[];
  };
  info: {
    title: string;
    fields: FooterField[];
  };
  copyright: string;
  marquee: string;
};
