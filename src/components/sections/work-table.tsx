import AppItemType from "@/components/cards/apps/data/app";
import { clientOf, workIndex } from "@/components/cards/apps/data/work";
import { Link } from "@tanstack/react-router";
import { WorkLogo } from "./work-list";

// Index of every project: one row each, highlighted in yellow on hover.
export default function WorkTable({ works }: { works: AppItemType[] }) {
  return (
    <div>
      <div className="gutter heading-mono hidden grid-cols-12 gap-6 border-b border-line/15 py-4 md:grid">
        <span className="col-span-1">NO.</span>
        <span className="col-span-4">PROJECT</span>
        <span className="col-span-3">CLIENT</span>
        <span className="col-span-4">STACK</span>
      </div>
      <ul>
        {works.map((work, index) => (
          <li key={work.path} className="border-b border-line/15">
            <Link
              to={work.path}
              className="gutter group grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 py-4 transition-colors hover:bg-accent hover:text-[#080707] md:grid-cols-12 md:gap-6"
            >
              <span className="label hidden md:col-span-1 md:block">
                {workIndex(index)}
              </span>
              <span className="flex items-center gap-4 md:col-span-4">
                <WorkLogo work={work} className="w-11 border border-line/10" />
                <span className="text-lg font-medium leading-tight">
                  {work.title}
                </span>
              </span>
              <span className="label col-start-2 text-muted group-hover:text-[#080707] md:col-span-3 md:col-start-auto">
                {clientOf(work) ?? "Independent"}
              </span>
              <span className="col-start-2 flex items-center justify-between gap-4 text-[15px] text-muted group-hover:text-[#080707] md:col-span-4 md:col-start-auto">
                {work.tags.slice(0, 3).join(", ")}
                <span className="hidden font-mono text-ink transition-transform group-hover:translate-x-1 group-hover:text-[#080707] md:inline">
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
