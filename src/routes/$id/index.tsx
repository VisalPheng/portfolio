import AppPageEntry from "@/components/cards/app-page/app-page-entry";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$id/")({
  component: AppPageEntry,
});
