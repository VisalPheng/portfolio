import {
  allWork,
  clientOf,
  summaryOf,
  workIndex,
} from "@/components/cards/apps/data/work";
import NotFound from "@/components/other/404";
import ContactSection from "@/components/sections/contact-section";
import { ProjectMedia } from "@/components/sections/work-list";
import Roll from "@/shared/components/ui/roll";
import { Link, useRouter } from "@tanstack/react-router";

function AboutWork({ id }: { id: string }) {
  const router = useRouter();
  const index = allWork.findIndex((work) => work.path === `/work/${id}`);
  if (index === -1) return <NotFound />;

  const work = allWork[index];
  const next = allWork[(index + 1) % allWork.length];
  const client = clientOf(work);
  const links = [
    { name: "VISIT", href: work.link },
    { name: "GITHUB", href: work.github },
    { name: "PUB.DEV", href: work.pub },
    { name: "APP STORE", href: work.appstore },
    { name: "GOOGLE PLAY", href: work.playstore },
  ].filter((link) => !!link.href);

  return (
    <>
      <article>
        <div className="gutter flex items-center justify-between border-b border-line/90 py-4">
          <button
            type="button"
            onClick={() => router.history.back()}
            className="label"
          >
            <Roll>← BACK</Roll>
          </button>
          <span className="heading-mono">
            {workIndex(index)} / {String(allWork.length).padStart(3, "0")}
          </span>
        </div>

        <header className="gutter grid gap-8 pt-12 pb-10 md:grid-cols-12 md:gap-6 md:pt-16">
          <h1 className="section-title md:col-span-7">{work.title}</h1>
          <p className="text-lg leading-[1.45] md:col-span-5 md:self-end">
            {summaryOf(work)}
          </p>
        </header>

        <div className="gutter group">
          <ProjectMedia work={work} index={index} />
        </div>

        <dl className="gutter mt-10 grid gap-4 border-t border-line/90 pt-5 md:grid-cols-12 md:gap-6">
          <dt className="heading-mono md:col-span-3">CLIENT</dt>
          <dd className="md:col-span-9">{client ?? "Independent"}</dd>
        </dl>
        <dl className="gutter mt-5 grid gap-4 border-t border-line/15 pt-5 md:grid-cols-12 md:gap-6">
          <dt className="heading-mono md:col-span-3">STACK</dt>
          <dd className="flex flex-wrap gap-2 md:col-span-9">
            {work.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </dd>
        </dl>
        {links.length > 0 && (
          <dl className="gutter mt-5 grid gap-4 border-t border-line/15 pt-5 md:grid-cols-12 md:gap-6">
            <dt className="heading-mono md:col-span-3">LINKS</dt>
            <dd className="flex flex-wrap gap-6 md:col-span-9">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="label"
                >
                  <Roll>{link.name} ↗</Roll>
                </a>
              ))}
            </dd>
          </dl>
        )}

        {next && next !== work && (
          <Link
            to={next.path}
            className="gutter group mt-20 flex items-end justify-between gap-6 border-t border-line/90 bg-paper py-10 transition-colors hover:bg-accent hover:text-[#080707]"
          >
            <span className="flex flex-col gap-4">
              <span className="label">NEXT PROJECT</span>
              <span className="section-title">{next.title}</span>
            </span>
            <span className="font-mono text-3xl transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>
        )}
      </article>
      <ContactSection />
    </>
  );
}

export default AboutWork;
