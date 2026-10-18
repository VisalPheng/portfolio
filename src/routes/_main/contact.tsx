import Contact from "@/components/contact/contact";
import contactMetadata from "@/metadata/contact";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/contact")({
  head: () => contactMetadata,
  component: Contact,
});
