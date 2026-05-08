import type { PhoneSliderData } from "@/types/landing";

export const phoneSlider: PhoneSliderData = {
  copy: {
    eyebrow: "PORTFOLIO",
    title: "성공의 기록이 곧 우리의 실력입니다.",
    desc: "막연한 제안이 아닌, 실제 수치로 증명된 프로젝트들입니다. 다양한 업종의 한계를 넘어서며 만들어낸 시그널디코드만의 압도적인 퍼포먼스를 확인해 보세요.",
  },
  toggle: {
    marketing: "마케팅",
    dev: "웹·개발",
  },
  slides: {
    marketing: [
      { src: "/images/slider1.png" },
      { src: "/images/slider2.jpg" },
      { src: "/images/slider3.png" },
      { src: "/images/slider4.jpg" },
      { src: "/images/slider5.png" },
    ],
    dev: [
      { src: "/images/portfolio/대성학원.jpg", href: "/web/daeseong-kiosk" },
      { src: "/images/portfolio/이음푸드.jpg", href: "/web/eumfood" },
      { src: "/images/portfolio/정성SR.jpg", href: "/web/jeongseong-sr" },
      { src: "/images/portfolio/제로랩스.jpg", href: "/web/zerolabs" },
      { src: "/images/portfolio/청춘만사성.jpg", href: "/web/cheongchun" },
    ],
  },
  more: "더 보러가기",
};
