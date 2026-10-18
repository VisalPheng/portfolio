import Work from "@/components/work/work";
import workMetadata from "@/metadata/work";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/work/")({
  head: () => workMetadata,
  component: Work,
});
