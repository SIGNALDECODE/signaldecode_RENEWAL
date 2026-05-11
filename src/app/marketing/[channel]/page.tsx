import { notFound } from "next/navigation";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import MarketingHero from "@/components/marketing/MarketingHero";
import ServiceCards from "@/components/marketing/ServiceCards";
import ContactPromptBar from "@/components/ui/ContactPromptBar";
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
        <ServiceCards
          kicker={data.kicker}
          title={data.title}
          cardImage={data.cardImage}
          cardGradient={data.cardGradient}
          cards={data.cards}
        />
      </main>
      <ContactPromptBar />
      <Footer />
    </>
  );
}
