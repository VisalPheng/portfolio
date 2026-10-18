import AppItemType from "@/components/cards/apps/data/app";
import { clientOf, workIndex } from "@/components/cards/apps/data/work";
import Roll from "@/shared/components/ui/roll";
import { Link } from "@tanstack/react-router";

// Tilted cards in a horizontal strip; each one straightens on hover.
export default function OtherWork({
  works,
  offset,
}: {
  works: AppItemType[];
  offset: number;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="gutter flex items-end justify-between gap-6">
        <h2 className="section-title">Other work</h2>
        <Link to="/work" className="heading-mono">
          <Roll>VIEW ALL ({works.length + offset}) →</Roll>
        </Link>
      </div>
      <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 py-16 xs:px-6 md:mt-16 md:py-24 lg:px-[22px]">
        {works.map((work, index) => (
          <li
            key={work.path}
            className="shrink-0 snap-start"
            style={{ zIndex: works.length - index }}
          >
            <Link
              to={work.path}
              className={
                "group flex h-[340px] w-[250px] flex-col justify-between bg-white p-4 text-[#080707] shadow-[0_30px_60px_-25px_rgb(0_0_0/0.35)] transition-transform duration-500 ease-out hover:z-10 hover:![transform:perspective(1200px)_rotateY(0deg)_translateZ(40px)] " +
                (index % 2
                  ? "[transform:perspective(1200px)_rotateY(22deg)]"
                  : "[transform:perspective(1200px)_rotateY(-22deg)]")
              }
            >
              <span className="flex justify-between font-mono text-[11px] font-medium uppercase tracking-[0.1em]">
                <span>{workIndex(index + offset)}</span>
                <span className="max-w-[70%] truncate text-right opacity-60">
                  {clientOf(work) ?? "Independent"}
                </span>
              </span>
              <img
                src={work.image}
                alt=""
                width={140}
                height={140}
                loading="lazy"
                className="mx-auto w-[56%] rounded-[22%] object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <span className="flex items-end justify-between gap-3">
                <span className="text-[17px] font-medium leading-tight">
                  {work.title}
                </span>
                <span className="font-mono text-sm">↗</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
