import getAppPage from "@/components/cards/app-page/data/get-object";
import metadataBuilder from "@/metadata/builder";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$id")({
  head: ({ params }) => {
    const { id } = params;
    const app = getAppPage(id)?.app;
    if (!app) return {};
    return metadataBuilder(app.title, app.description, {
      og: app.image,
      icons: app.image,
      path: `/${id}`,
      keywords: app.tags,
    });
  },
  component: Layout,
});

function Layout() {
  return (
    <main className="m-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-4 py-4 xs:px-10 xs:py-10">
      <Outlet />
    </main>
  );
}
