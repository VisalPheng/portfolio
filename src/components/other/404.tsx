import { Link } from "@tanstack/react-router";
import Roll from "@/shared/components/ui/roll";

export default function NotFound({ err }: { err?: string }) {
  return (
    <section className="gutter flex min-h-[70vh] w-full flex-col items-start justify-center gap-8 py-16">
      <p className="label text-muted">( ERROR )</p>
      <p className="font-display text-[clamp(6rem,22vw,16rem)] leading-none">
        404
      </p>
      <p className="max-w-[40ch] text-xl text-muted">
        {err || "We couldn't find the page you're looking for."}
      </p>
      <Link
        to="/"
        className="label border border-line/80 px-4 py-2.5 transition-colors hover:bg-ink hover:text-paper"
      >
        <Roll>← GO HOME</Roll>
      </Link>
    </section>
  );
}
