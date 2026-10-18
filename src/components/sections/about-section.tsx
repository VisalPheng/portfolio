import {
  allWork,
  clientOf,
  clients,
  uniqueTags,
} from "@/components/cards/apps/data/work";
import {
  currentRole,
  education,
  experiences,
  formatPeriod,
  honors,
  topSkills,
  yearsOfExperience,
} from "@/constants/experience";
import { author } from "@/constants/strings";

// Everything below sits on the yellow band, so colours are fixed rather than
// following the light/dark tokens.
const row = "grid gap-4 border-t border-[#080707] pt-5 md:grid-cols-12 md:gap-6";
const subRow = "border-b border-[#080707]/15";

const services = [
  "Backend architecture",
  "APIs & back-office infrastructure",
  "CRM & internal tooling",
  "Marketplace & customer-facing platforms",
  "Full-stack web applications",
  "AI/ML integration",
];

const clientRows = clients.map((client) => {
  const works = allWork.filter((work) => clientOf(work) === client);
  const stack = works
    .flatMap((work) => work.tags)
    .filter((tag, index, array) => array.indexOf(tag) === index);
  return { client, works, stack };
});

const technologies = [...uniqueTags, ...topSkills]
  .filter((tag, index, array) => array.indexOf(tag) === index)
  .sort((a, b) => a.localeCompare(b));

function ExperienceTable() {
  return (
    <div className="md:col-span-9">
      <div
        className={
          "heading-mono hidden grid-cols-9 gap-6 pb-4 md:grid " + subRow
        }
      >
        <span className="col-span-3">ROLE</span>
        <span className="col-span-3">COMPANY</span>
        <span className="col-span-3">PERIOD</span>
      </div>
      <ul>
        {experiences.map((experience) => {
          const summary = (
            <>
              <span className="font-medium md:col-span-3">
                {experience.role}
              </span>
              <span className="md:col-span-3">{experience.company}</span>
              <span className="flex items-start justify-between gap-4 md:col-span-3">
                <span className="opacity-70">
                  {formatPeriod(experience)} · {experience.location}
                </span>
                {experience.highlights && (
                  <span
                    aria-hidden
                    className="font-mono text-lg leading-none transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                )}
              </span>
            </>
          );
          const grid = "grid gap-1 py-3 md:grid-cols-9 md:gap-6";
          return (
            <li key={experience.company} className={subRow}>
              {experience.highlights ? (
                <details className="group">
                  <summary
                    className={
                      grid +
                      " cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                    }
                  >
                    {summary}
                  </summary>
                  <ul className="flex flex-col gap-2 pb-5 md:ml-[calc((100%+1.5rem)/9*3)] md:max-w-[640px]">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 leading-snug">
                        <span aria-hidden>→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <div className={grid}>{summary}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function AboutSection() {
  const [first, last] = author.toUpperCase().split(" ");
  const counts = [
    { title: "Projects", items: allWork.map((work) => work.title) },
    { title: "Technologies", items: technologies },
  ];

  return (
    <section id="about" className="gutter pt-10 pb-16 md:pb-20">
      <div className={row}>
        <p className="heading-mono md:col-span-3">BIO</p>
        <p className="heading-mono md:col-span-3">
          {yearsOfExperience} + YEARS IN SOFTWARE
        </p>
        <div className="flex flex-col gap-5 text-base leading-[1.4] md:col-span-6">
          <p>
            Software developer with a track record of architecting scalable
            systems and leading end-to-end product development
            {currentRole &&
              `, currently ${currentRole.role} at ${currentRole.company}`}
            .
          </p>
          <p>
            I specialize in designing robust backend architecture, from CRM and
            internal tooling to customer-facing platforms and marketplace
            systems, backed by well-structured APIs and back-office
            infrastructure.
          </p>
          <p>
            Before that, I did full-stack development on platforms supporting
            national digital transformation initiatives with Next.js,
            TypeScript and NestJS, and earlier built complete web systems end
            to end, from database schema to API to frontend, with Vue.js and
            Laravel.
          </p>
          <p>
            I bring a systems-level approach to engineering: designing for
            scalability, prioritizing code quality, and integrating AI/ML where
            it delivers measurable value.
          </p>
        </div>
      </div>

      <p
        aria-label={author}
        className="flex select-none flex-col py-16 font-display text-[clamp(4rem,17vw,16rem)] uppercase leading-[0.85] md:py-24"
      >
        <span>{first}</span>
        <span className="self-end">{last}</span>
      </p>

      <div id="experience" className={row}>
        <p className="heading-mono md:col-span-3">EXPERIENCE</p>
        <ExperienceTable />
      </div>

      <div className={row + " mt-6"}>
        <p className="heading-mono md:col-span-3">SERVICES</p>
        <ul className="md:col-span-9">
          {services.map((service) => (
            <li
              key={service}
              className="border-b border-[#080707]/15 py-2.5 first:pt-0 last:border-0"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div className={row + " mt-6"}>
        <p className="heading-mono md:col-span-3">CLIENTS</p>
        <div className="md:col-span-9">
          <div
            className={
              "heading-mono hidden grid-cols-9 gap-6 pb-4 md:grid " + subRow
            }
          >
            <span className="col-span-2">CLIENT</span>
            <span className="col-span-4">PROJECTS</span>
            <span className="col-span-3">STACK</span>
          </div>
          <ul>
            {clientRows.map(({ client, works, stack }) => (
              <li
                key={client}
                className={"grid gap-1 py-3 md:grid-cols-9 md:gap-6 " + subRow}
              >
                <span className="font-medium md:col-span-2">{client}</span>
                <span className="md:col-span-4">
                  {works.map((work) => work.title).join(", ")}
                </span>
                <span className="opacity-70 md:col-span-3">
                  {stack.slice(0, 4).join(", ")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={row + " mt-6"}>
        <p className="heading-mono md:col-span-3">EDUCATION</p>
        <div className="grid gap-1 md:col-span-9 md:grid-cols-9 md:gap-6">
          <span className="font-medium md:col-span-3">{education.degree}</span>
          <span className="md:col-span-3">{education.school}</span>
          <span className="opacity-70 md:col-span-3">
            {formatPeriod(education)}
          </span>
        </div>
      </div>

      <div className={row + " mt-6"}>
        <p className="heading-mono md:col-span-3">HONORS & CERTIFICATES</p>
        <ul className="md:col-span-9">
          {honors.map((honor) => (
            <li
              key={honor.title}
              className="grid gap-1 border-b border-[#080707]/15 py-2.5 first:pt-0 last:border-0 md:grid-cols-9 md:gap-6"
            >
              <span className="font-medium md:col-span-6">{honor.title}</span>
              <span className="opacity-70 md:col-span-3">{honor.detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-[#080707]">
        {counts.map((group) => (
          <div
            key={group.title}
            className="grid gap-3 border-b border-[#080707] py-6 md:grid-cols-12 md:gap-6"
          >
            <p className="heading-mono flex flex-col gap-2 md:col-span-3">
              <span>{group.title}</span>
              <span>X {group.items.length}</span>
            </p>
            <p className="self-end leading-relaxed md:col-span-9">
              {group.items.join(", ")}.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
