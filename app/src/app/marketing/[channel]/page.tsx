import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketingHero from "@/components/marketing/MarketingHero";
import ServiceCards from "@/components/marketing/ServiceCards";
import ChannelMenu from "@/components/marketing/ChannelMenu";
import { CHANNELS, getChannel } from "@/components/marketing/channels";

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
          brand={data.brand}
          cards={data.cards}
          tint={data.tint}
        />
      </main>
      <Footer />
    </>
  );
}
