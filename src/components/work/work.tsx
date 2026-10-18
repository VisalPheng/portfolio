import { allWork } from "@/components/cards/apps/data/work";
import WorkTable from "@/components/sections/work-table";

function Work() {
  return (
    <section>
      <div className="gutter flex items-end justify-between gap-6 border-b border-line/90 pt-12 pb-10 md:pt-14 md:pb-12">
        <h1 className="section-title">All work</h1>
        <p className="heading-mono">X {allWork.length}</p>
      </div>
      <WorkTable works={allWork} />
    </section>
  );
}

export default Work;
