import type { ContactData } from "@/types/contact";

export const contact: ContactData = {
  hero: {
    bg: "/images/contact/contact-hero.png",
    title: "고객지원",
    desc: "제작 문의, 기술 지원, 운영 상담 등 신속하게 안내해드립니다.",
    breadcrumb: [
      { label: "고객지원" },
      { label: "문의하기" },
    ],
  },
  form: {
    display: {
      eyebrow: "REQUEST",
      title: "CONSULTATION",
    },
    info: [
      { label: "대표전화", value: "010-4409-3887" },
      { label: "메일문의", value: "signaldecode@signal-decode.com" },
      { label: "업무시간", value: "10:00 - 19:00" },
    ],
    fields: [
      {
        name: "name",
        label: "성함",
        placeholder: "이름을 입력하세요.",
        required: true,
        type: "text",
      },
      {
        name: "company",
        label: "회사명(브랜드)",
        placeholder: "회사명(브랜드)을 입력하세요.",
        required: true,
        type: "text",
      },
      {
        name: "email",
        label: "이메일",
        placeholder: "이메일을 입력하세요.",
        required: true,
        type: "email",
      },
      {
        name: "phone",
        label: "연락처",
        placeholder: "연락처를 입력하세요.",
        required: true,
        type: "tel",
      },
      {
        name: "website",
        label: "홈페이지 URL",
        placeholder: "홈페이지 URL을 입력하세요.",
        required: true,
        type: "url",
      },
    ],
    checkboxGroups: [
      {
        name: "adType",
        label: "광고 유형(다중 선택 가능)",
        required: true,
        columns: [
          ["미지정", "SNS 광고", "E-Commerce(쇼핑몰)", "기타"],
          ["검색 광고", "바이럴 광고", "라이브커머스"],
          ["배너 광고", "영상 광고", "콘텐츠 제작"],
        ],
      },
      {
        name: "webType",
        label: "웹/개발 문의 유형(다중 선택 가능)",
        required: true,
        columns: [
          ["E-Commerce(쇼핑몰)", "모바일 웹/앱 개발", "랜딩페이지"],
          ["게시판/CMS 구축", "기업 사이트", "기타"],
          ["API 연동 개발", "자체 서비스 페이지 개발"],
        ],
      },
    ],
    textarea: {
      name: "content",
      label: "의뢰 범위 및 내용",
      placeholder: "원하시는 문의사항을 편하게 남겨주세요.",
      required: true,
    },
    consent: {
      text: "개인정보 수집 및 이용에 동의합니다.",
      badge: "[필수]",
    },
    submitLabel: "제출하기",
  },
};
