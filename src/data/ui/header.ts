import type { HeaderData } from "@/types/ui";
import { CHANNELS } from "@/data/channels";

export const header: HeaderData = {
  logo: { src: "/icons/logo.svg", alt: "SIGNALDECODE" },
  brand: "SIGNALDECODE",
  nav: [
    { label: "회사소개", href: "/about" },
    {
      label: "마케팅서비스",
      href: "/marketing/naver",
      dropdown: CHANNELS.filter((c) => c.key !== "naver").map((c) => ({
        label: c.pillLabel,
        href: `/marketing/${c.key}`,
      })),
    },
    { label: "웹·개발", href: "/web" },
    { label: "이벤트", href: "#", comingSoon: true },
    { label: "고객지원", href: "#", comingSoon: true },
  ],
  cta: { label: "문의하기", href: "/contact" },
  comingSoonLabel: "준비중입니다",
};
