import NotFound from "@/components/other/404";
import { useParams } from "@tanstack/react-router";
import AppPage from "./app-page";
import getAppPage from "./data/get-object";

export default function AppPageEntry() {
  const { id } = useParams({ from: "/$id" });
  const page = getAppPage(id);
  if (!page) return <NotFound />;
  return <AppPage page={page} />;
}
