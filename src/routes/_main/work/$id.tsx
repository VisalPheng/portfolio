import { allWork } from "@/components/cards/apps/data/work";
import AboutWork from "@/components/work/about-work";
import { title } from "@/constants/strings";
import metadataBuilder from "@/metadata/builder";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/work/$id")({
  head: ({ params }) => {
    const work = allWork.find((work) => work.path === `/work/${params.id}`);
    if (!work) return {};
    return metadataBuilder(`${title} | ${work.title}`, work.description, {
      path: work.path,
      keywords: work.tags,
    });
  },
  component: AboutWorkEntry,
});

function AboutWorkEntry() {
  const { id } = Route.useParams();
  return <AboutWork id={id} />;
}
