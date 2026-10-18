import AppPageEntry from "@/components/cards/app-page/app-page-entry";
import getAppPage from "@/components/cards/app-page/data/get-object";
import { createFileRoute } from "@tanstack/react-router";

// Send iOS / Android visitors straight to the matching store listing.
const storeRedirect = (id: string, userAgent: string) => {
  const app = getAppPage(id)?.app;
  if (!app) return;
  if (app.appstore && /iPhone|iPad|iPod/i.test(userAgent)) return app.appstore;
  if (app.playstore && /Android/i.test(userAgent)) return app.playstore;
};

export const Route = createFileRoute("/$id/download")({
  server: {
    handlers: {
      GET: ({ request, params, next }) => {
        const store = storeRedirect(
          params.id,
          request.headers.get("user-agent") ?? ""
        );
        if (store) return Response.redirect(store, 307);
        return next();
      },
    },
  },
  component: AppPageEntry,
});
