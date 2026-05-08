import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WebHero from "@/components/web/WebHero";
import WebFeatures from "@/components/web/WebFeatures";
import WebPortfolio from "@/components/web/WebPortfolio";
import WebCTA from "@/components/web/WebCTA";
import WebFloatingBar from "@/components/web/WebFloatingBar";

export const metadata: Metadata = {
  title: "웹·개발 | SIGNALDECODE",
  description:
    "기획부터 개발까지 하나의 흐름으로 브랜드의 방향성과 비즈니스 구조에 맞춰 맞춤형으로 설계합니다.",
};

export default function WebPage() {
  return (
    <>
      <Header />
      <main>
        <WebHero />
        <WebFeatures />
        <WebPortfolio />
        <WebCTA />
      </main>
      <WebFloatingBar />
      <Footer />
    </>
  );
}
