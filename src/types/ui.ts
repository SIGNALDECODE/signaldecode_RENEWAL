export type NavLink = {
  label: string;
  href: string;
};

export type HeaderData = {
  logo: { src: string; alt: string };
  brand: string;
  nav: NavLink[];
  cta: { label: string };
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
