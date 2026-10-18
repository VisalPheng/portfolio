import { mail } from "@/constants/strings";
import linksMetadata from "@/metadata/links";
import Roll from "@/shared/components/ui/roll";
import { useState } from "react";
import { Monogram } from "./hero";

const socials = [
  { name: "GITHUB", href: linksMetadata.github },
  { name: "LINKEDIN", href: linksMetadata.linkedin },
  { name: "INSTAGRAM", href: linksMetadata.instagram },
  { name: "X (TWITTER)", href: linksMetadata.x },
];

const row =
  "gutter relative grid items-center gap-4 border-t border-white/15 py-5 sm:grid-cols-[1fr_auto]";

function EmailPill() {
  const [copied, setCopied] = useState(false);
  return (
    <span className="inline-flex w-full items-center justify-between gap-4 rounded-full border border-white/25 py-2 pl-6 pr-2 sm:w-[420px]">
      <a
        href={"mailto:" + mail}
        className="truncate font-mono text-[13px] font-semibold uppercase tracking-[0.1em] hover:underline"
      >
        {mail}
      </a>
      <button
        type="button"
        aria-label="Copy email address"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(mail);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          } catch {}
        }}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 font-mono text-sm transition-colors hover:bg-white hover:text-[#080707]"
      >
        {copied ? "✓" : "⧉"}
      </button>
    </span>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080707] text-white"
    >
      <Monogram className="extrude-dark pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] rotate-[-8deg] text-[clamp(12rem,36vw,30rem)]" />

      <div className="gutter relative min-h-[420px] border-t border-white/15 pt-8 md:min-h-[460px]">
        <p className="max-w-[360px] font-mono text-[15px] font-semibold uppercase leading-[1.15] tracking-[0.12em]">
          If you have a project in mind, a question to ask, feedback to share,
          or an exciting opportunity to explore, let&apos;s connect and chat!
        </p>
      </div>

      <div className={row}>
        <p className="label">SAY HELLO</p>
        <a
          href={"mailto:" + mail}
          className="group inline-flex w-full items-center justify-between gap-4 rounded-full bg-accent px-6 py-5 text-[#080707] sm:w-[420px]"
        >
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.14em]">
            <Roll>START A PROJECT</Roll>
          </span>
          <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
      </div>

      <div className={row}>
        <p className="label">EMAIL</p>
        <EmailPill />
      </div>

      <div className={row}>
        <p className="label">CONNECT</p>
        <ul className="flex flex-wrap gap-x-10 gap-y-3">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="label"
              >
                <Roll>{social.name} ↗</Roll>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
