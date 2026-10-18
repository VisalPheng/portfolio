import AppItemType from "@/components/cards/apps/data/app";
import {
  clientOf,
  summaryOf,
  workIndex,
} from "@/components/cards/apps/data/work";
import Roll from "@/shared/components/ui/roll";
import { Link } from "@tanstack/react-router";

export function WorkLogo({
  work,
  className = "",
}: {
  work: AppItemType;
  className?: string;
}) {
  return (
    <div
      className={
        "flex aspect-square shrink-0 items-center justify-center overflow-hidden rounded-[22%] bg-white " +
        className
      }
    >
      <img
        src={work.image}
        alt={work.title}
        width={240}
        height={240}
        loading="lazy"
        className={"h-full w-full object-contain " + (work.imageClassName ?? "")}
      />
    </div>
  );
}

// Grey tile with a floating "spec" card, like a product widget shot.
function SpecTile({ work }: { work: AppItemType }) {
  return (
    <div className="flex h-full items-center justify-center bg-tile px-6 py-12 md:py-6">
      <div className="w-full max-w-[300px] rounded-[30px] bg-white p-5 text-[#080707] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.25)] transition-transform duration-700 group-hover:-translate-y-2">
        <WorkLogo work={work} className="w-14 border border-black/5" />
        <p className="mt-8 text-[26px] font-semibold leading-tight tracking-[-0.02em]">
          Stack
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {work.tags.slice(0, 4).map((tag) => (
            <li
              key={tag}
              className="flex items-center justify-between rounded-2xl bg-neutral-100 px-4 py-2.5 text-[15px] text-neutral-600"
            >
              {tag}
              <span>→</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Colour field generated from the logo itself, with the logo floating on top.
function LogoField({ work }: { work: AppItemType }) {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-tile">
      <img
        src={work.image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-150 object-cover opacity-70 blur-3xl saturate-150"
      />
      <WorkLogo
        work={work}
        className="relative w-[34%] max-w-[260px] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.45)] transition-transform duration-700 group-hover:scale-[1.04]"
      />
    </div>
  );
}

export function ProjectMedia({
  work,
  index,
}: {
  work: AppItemType;
  index: number;
}) {
  const layout = index % 3;
  if (layout === 2)
    return (
      <div className="h-[clamp(300px,52vw,760px)]">
        <LogoField work={work} />
      </div>
    );
  const panels = [
    <div key="spec" className="py-0 md:h-auto">
      <SpecTile work={work} />
    </div>,
    <div key="field" className="h-[clamp(300px,52vw,760px)]">
      <LogoField work={work} />
    </div>,
  ];
  return (
    <div
      className={
        "grid gap-4 md:h-[clamp(300px,52vw,760px)] " +
        (layout === 0 ? "md:grid-cols-[5fr_8fr]" : "md:grid-cols-[8fr_5fr]")
      }
    >
      {layout === 0 ? panels : panels.reverse()}
    </div>
  );
}

export function WorkBlock({ work, index }: { work: AppItemType; index: number }) {
  const client = clientOf(work);
  return (
    <article className="border-b border-line/90 py-12 md:py-14">
      <div className="gutter">
        <div className="heading-mono flex items-baseline justify-between gap-6 pb-4">
          <span>
            {work.title}
            {client && <span className="text-muted"> / {client}</span>}
          </span>
          <span>{workIndex(index)}</span>
        </div>
        <Link to={work.path} className="group block" aria-label={work.title}>
          <ProjectMedia work={work} index={index} />
        </Link>
        <div className="flex flex-col gap-4 py-5 md:flex-row md:items-start md:justify-between">
          <p className="max-w-[520px] text-base leading-[1.45]">
            {summaryOf(work)}
          </p>
          <ul className="flex flex-wrap gap-2 md:max-w-[50%] md:justify-end">
            {work.tags.slice(0, 4).map((tag) => (
              <li key={tag} className="pill">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={work.path}
          className="group flex items-center justify-between border-t border-line/15 pt-5"
        >
          <span className="label">
            <Roll>READ FULL PROJECT</Roll>
          </span>
          <span className="flex gap-1.5" aria-hidden>
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="h-2 w-2 rounded-full bg-ink transition-transform duration-300 group-hover:translate-x-1"
                style={{ transitionDelay: `${dot * 50}ms` }}
              />
            ))}
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function WorkList({
  works,
  offset = 0,
}: {
  works: AppItemType[];
  offset?: number;
}) {
  return (
    <div>
      {works.map((work, index) => (
        <WorkBlock key={work.path} work={work} index={index + offset} />
      ))}
    </div>
  );
}
