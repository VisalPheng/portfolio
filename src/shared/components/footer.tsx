import { title } from "@/constants/strings";
import linksMetadata from "@/metadata/links";
import Roll from "./ui/roll";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#080707] text-white">
      <div className="gutter grid items-center gap-4 border-t border-white/15 py-6 font-mono text-[11px] font-medium uppercase tracking-[0.12em] sm:grid-cols-3">
        <p>PV {year}©</p>
        <p className="text-white/70 sm:text-center">
          Designed & built by{" "}
          <a
            href={linksMetadata.github}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:underline"
          >
            {title}
          </a>
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="justify-self-start sm:justify-self-end"
        >
          <Roll>BACK TO TOP ↑</Roll>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
