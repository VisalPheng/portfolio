import { allWork, clientOf } from "@/components/cards/apps/data/work";
import { currentRole, yearsOfExperience } from "@/constants/experience";
import { author, mail } from "@/constants/strings";
import Roll from "@/shared/components/ui/roll";
import { Link } from "@tanstack/react-router";

const labels = [
  currentRole
    ? `[${currentRole.role} @ ${currentRole.company}]`
    : "[SOFTWARE DEVELOPER]",
  `[${yearsOfExperience}+ YEARS IN SOFTWARE]`,
  "[BACKEND / FULL STACK]",
];

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={
        "select-none font-display font-bold uppercase leading-none tracking-[-0.04em] " +
        className
      }
    >
      PV
    </span>
  );
}

function LatestCard() {
  const latest = allWork[0];
  if (!latest) return null;
  return (
    <Link
      to={latest.path}
      className="group hidden w-[186px] flex-col gap-2 border border-line/15 bg-paper p-2 shadow-sm transition-shadow hover:shadow-md md:flex"
    >
      <span className="flex justify-between font-mono text-[11px] font-medium uppercase tracking-[0.1em]">
        <span>LATEST</span>
        <span>[001]</span>
      </span>
      <span className="flex aspect-square items-center justify-center bg-tile p-6">
        <img
          src={latest.image}
          alt={latest.title}
          width={120}
          height={120}
          className="w-full rounded-[22%] bg-white object-contain shadow-sm transition-transform duration-500 group-hover:scale-105"
        />
      </span>
      <span className="truncate font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
        {clientOf(latest) ?? latest.title}
      </span>
      <span className="flex justify-between font-mono text-[13px] font-medium uppercase tracking-[0.1em]">
        <Roll>[VIEW]</Roll>
        <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          ↗
        </span>
      </span>
    </Link>
  );
}

export function SayHello({ className = "" }: { className?: string }) {
  return (
    <a
      href={"mailto:" + mail}
      className={
        "group inline-flex items-center gap-4 bg-[#080707] px-5 py-4 text-white dark:ring-1 dark:ring-white/20 " +
        className
      }
    >
      <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.14em]">
        <Roll>SAY HELLO</Roll>
      </span>
    </a>
  );
}

export default function Hero() {
  return (
    <section className="dots relative flex min-h-[calc(100svh-3.5rem)] flex-col border-b border-line/90">
      <div className="gutter rise flex flex-col justify-between gap-6 pt-5 sm:flex-row">
        <p className="max-w-[380px] font-mono text-[15px] font-medium uppercase leading-[1.15] tracking-[0.12em]">
          {author}. Software developer architecting scalable systems and
          leading end-to-end product development.
        </p>
        <ul className="flex flex-col gap-0.5 sm:items-end sm:text-right">
          {labels.map((label) => (
            <li
              key={label}
              className="font-mono text-[12px] font-medium uppercase tracking-[0.12em]"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-1 items-center justify-center py-10">
        <Monogram className="extrude float text-[clamp(9rem,30vw,26rem)]" />
      </div>

      <div className="gutter grid grid-cols-[1fr_auto_1fr] items-end gap-4 pb-4">
        <LatestCard />
        <a
          href="#work"
          className="col-start-2 font-mono text-[13px] font-medium uppercase tracking-[0.14em] hover:opacity-60"
        >
          SCROLL ↕
        </a>
        <div className="col-start-3 flex justify-end">
          <SayHello className="hidden sm:inline-flex" />
        </div>
      </div>
    </section>
  );
}
