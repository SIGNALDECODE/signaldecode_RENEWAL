import type { FooterData } from "@/types/ui";

export const footer: FooterData = {
  source: {
    title: "New Source",
    fields: [
      {
        label: "Adress",
        value: "서울특별시 마포구 잔다리로 44, 6층(서교동, 센터원빌딩)",
      },
      { label: "E-mail", value: "signaldecode@signal-decode.com" },
    ],
  },
  info: {
    title: "Info",
    fields: [
      { label: "대표", value: "손재현" },
      { label: "Phone", value: "02-322-7779" },
      { label: "사업자번호", value: "397-88-03608" },
      { label: "업무시간", value: "10:00 - 19:00" },
    ],
  },
  copyright: "COPYRIGHT © 2020 SIGNALDECODE. ALL RIGHTS RESERVED.",
  marquee: "SIGNAL DECODE",
};
