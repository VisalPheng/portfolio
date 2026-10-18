import ContactSection from "@/components/sections/contact-section";
import FeaturedWork from "@/components/sections/featured-work";
import Hero from "@/components/sections/hero";
import YellowBand from "@/components/sections/yellow-band";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <YellowBand />
      <ContactSection />
    </>
  );
}
