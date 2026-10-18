import Home from "@/components/home/home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/")({
  component: Home,
});
