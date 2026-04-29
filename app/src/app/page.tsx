import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Hero from "@/components/landing/Hero";
import Overview from "@/components/landing/Overview";
import ValueCards from "@/components/landing/ValueCards";
import PhoneSlider from "@/components/landing/PhoneSlider";
import Quotes from "@/components/landing/Quotes";
import Partners from "@/components/landing/Partners";
import SalesNumbers from "@/components/landing/SalesNumbers";
import Professional from "@/components/landing/Professional";
import PerformanceChart from "@/components/landing/PerformanceChart";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <Overview />
        </Reveal>
        <ValueCards />
        <PhoneSlider />
        <Quotes />
        <Reveal>
          <Partners />
        </Reveal>
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
