import { allWork } from "@/components/cards/apps/data/work";
import AboutSection from "./about-section";
import { featuredCount } from "./featured-work";
import OtherWork from "./other-work";

export default function YellowBand({ showOtherWork = true }: { showOtherWork?: boolean }) {
  return (
    <div className="bg-accent text-[#080707] selection:bg-[#080707] selection:text-accent">
      {showOtherWork && allWork.length > featuredCount && (
        <OtherWork works={allWork.slice(featuredCount)} offset={featuredCount} />
      )}
      <AboutSection />
    </div>
  );
}
