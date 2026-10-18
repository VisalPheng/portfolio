import ContactSection from "@/components/sections/contact-section";
import YellowBand from "@/components/sections/yellow-band";

export default function About() {
  return (
    <>
      <YellowBand showOtherWork={false} />
      <ContactSection />
    </>
  );
}
