import Header from "@/components/ui/Header";
import Reveal from "@/components/ui/Reveal";
import Hero from "@/components/landing/Hero";
import Overview from "@/components/landing/Overview";
import MorphImage from "@/components/landing/MorphImage";
import ValueCards from "@/components/landing/ValueCards";
import PhoneSlider from "@/components/landing/PhoneSlider";
import Integration from "@/components/landing/Integration";
import Quotes from "@/components/landing/Quotes";
import Partners from "@/components/landing/Partners";
import SalesNumbers from "@/components/landing/SalesNumbers";
import Professional from "@/components/landing/Professional";
import PerformanceChart from "@/components/landing/PerformanceChart";
import Footer from "@/components/ui/Footer";
import { overviewMorphImage } from "@/data/landing/overview";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <MorphImage
          anchorSelector="[data-morph-anchor]"
          endSelector="[data-morph-end]"
          src={overviewMorphImage}
          disableAutoScroll
        />
        <ValueCards />
        <Integration />
        <Quotes />
        <Reveal>
          <Partners />
        </Reveal>
        <PhoneSlider />
        <SalesNumbers />
        <Reveal>
          <Professional /> 
        </Reveal>
        <PerformanceChart />
      </main>
      <Footer />
    </>
  );
}
