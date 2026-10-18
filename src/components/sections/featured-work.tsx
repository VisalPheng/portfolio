import { allWork } from "@/components/cards/apps/data/work";
import WorkList from "./work-list";

export const featuredCount = 4;

export default function FeaturedWork() {
  const featured = allWork.slice(0, featuredCount);
  return (
    <section id="work">
      <div className="gutter flex items-end justify-between gap-6 border-b border-line/90 pt-12 pb-10 md:pt-14 md:pb-12">
        <h2 className="section-title">Featured work</h2>
        <p className="heading-mono">
          001 – {String(featured.length).padStart(3, "0")}
        </p>
      </div>
      <WorkList works={featured} />
    </section>
  );
}
