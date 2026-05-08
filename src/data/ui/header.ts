import type { HeaderData } from "@/types/ui";

export const header: HeaderData = {
  logo: { src: "/icons/logo.png", alt: "" },
  brand: "SIGNALDECODE",
  nav: [
    { label: "회사소개", href: "/about" },
    { label: "마케팅서비스", href: "/marketing/naver" },
    { label: "웹·개발", href: "/web" },
    { label: "이벤트", href: "#" },
    { label: "고객지원", href: "#" },
  ],
  cta: { label: "문의하기" },
};
