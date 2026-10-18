import About from "@/components/about/about";
import aboutMetadata from "@/metadata/about";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/about")({
  head: () => aboutMetadata,
  component: About,
});
