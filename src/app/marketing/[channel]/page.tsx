import { notFound } from "next/navigation";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import MarketingHero from "@/components/marketing/MarketingHero";
import ServiceCards from "@/components/marketing/ServiceCards";
import ChannelMenu from "@/components/marketing/ChannelMenu";
import ChannelCTA from "@/components/marketing/ChannelCTA";
import { CHANNELS } from "@/data/channels";
import { getChannel } from "@/lib/data";

export function generateStaticParams() {
  return CHANNELS.map((c) => ({ channel: c.key }));
}

export default async function MarketingChannelPage({
  params,
}: {
  params: Promise<{ channel: string }>;
}) {
  const { channel } = await params;
  const data = getChannel(channel);
  if (!data) notFound();

  return (
    <>
      <Header />
      <main>
        <MarketingHero channel={data.label} />
        <ChannelMenu current={data.key} currentLabel={data.pillLabel} />
        <ServiceCards
          kicker={data.kicker}
          title={data.title}
          cardImage={data.cardImage}
          cardGradient={data.cardGradient}
          cards={data.cards}
        />
        <ChannelCTA
          kicker="마케팅 서비스"
          brand={data.brand}
          title={data.ctaTitle}
          desc={data.ctaDesc}
          link={data.ctaLink}
        />
      </main>
      <Footer />
    </>
  );
}
