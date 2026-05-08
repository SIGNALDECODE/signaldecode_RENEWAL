import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import MorphImage from "@/components/landing/MorphImage";
import AboutHero from "@/components/about/AboutHero";
import AboutTagline from "@/components/about/AboutTagline";
import AboutBusinessIntro from "@/components/about/AboutBusinessIntro";
import AboutValuePillars from "@/components/about/AboutValuePillars";
import AboutFeatureSections from "@/components/about/AboutFeatureSections";
import AboutKeywords from "@/components/about/AboutKeywords";
import AboutMarquee from "@/components/about/AboutMarquee";

export const metadata: Metadata = {
  title: "회사소개 | SIGNALDECODE",
  description:
    "데이터 기반의 통찰력으로 비즈니스 성장을 견인하는 풀스택 광고대행사 시그널디코드를 소개합니다.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutTagline />
        <MorphImage
          anchorSelector="[data-morph-anchor]"
          endSelector="[data-morph-end]"
          src="/images/about/aboutbg.png"
        />
        <AboutBusinessIntro />
        <AboutValuePillars />
        <AboutFeatureSections />
        <AboutKeywords />
        <AboutMarquee />
      </main>
      <Footer />
    </>
  );
}
