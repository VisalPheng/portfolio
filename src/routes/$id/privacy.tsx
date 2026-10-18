import getAppPage from "@/components/cards/app-page/data/get-object";
import Privacy from "@/components/cards/app-page/privacy";
import NotFound from "@/components/other/404";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$id/privacy")({
  component: PrivacyEntry,
});

function PrivacyEntry() {
  const { id } = Route.useParams();
  const page = getAppPage(id);
  if (!page) return <NotFound />;
  return <Privacy page={page} />;
}
