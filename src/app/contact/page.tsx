import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
