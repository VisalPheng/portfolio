import appCss from "@/globals.css?url";
import Providers from "@/lib/provider";
import rootMetadata from "@/metadata/root";
import { MainNotFound } from "@/shared/components/layout/main-layout";
import {
  HeadContent,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";

const fonts =
  "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Pixelify+Sans:wght@400..700&display=swap";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...rootMetadata.meta,
    ],
    links: [
      ...rootMetadata.links,
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: fonts },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: MainNotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen w-full">
        <Providers>{children}</Providers>
        <Scripts />
      </body>
    </html>
  );
}
