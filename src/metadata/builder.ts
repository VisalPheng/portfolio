import { author, host, url, username } from "@/constants/strings";

export type Icons =
  | string
  | { icon?: string; shortcut?: string; apple?: string }
  | null
  | undefined;

export type Metadata = {
  meta: Array<Record<string, string>>;
  links: Array<Record<string, string>>;
};

const absolute = (href: string) => new URL(href, url).href;

function iconLinks(icons: Icons): Metadata["links"] {
  if (!icons) return [];
  if (typeof icons === "string") return [{ rel: "icon", href: icons }];
  const links: Metadata["links"] = [];
  if (icons.icon) links.push({ rel: "icon", href: icons.icon });
  if (icons.shortcut) links.push({ rel: "shortcut icon", href: icons.shortcut });
  if (icons.apple) links.push({ rel: "apple-touch-icon", href: icons.apple });
  return links;
}

function metadataBuilder(
  title: string,
  description: string,
  {
    og,
    path,
    keywords,
    icons,
  }: {
    og?: string;
    path?: string;
    keywords?: string[];
    icons?: Icons;
  } = {}
): Metadata {
  path = path || "";
  const image = og ? absolute(og) : undefined;
  const meta: Metadata["meta"] = [
    { title },
    { name: "description", content: description },
    { name: "author", content: author },
    { name: "creator", content: author },
    { name: "publisher", content: author },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: "@" + username },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "en_US" },
    { property: "og:url", content: url + path },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:site_name", content: title },
  ];
  if (image) {
    meta.push(
      { name: "twitter:image", content: image },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: host }
    );
  }
  if (keywords?.length) meta.push({ name: "keywords", content: keywords.join(",") });
  return { meta, links: iconLinks(icons) };
}

export default metadataBuilder;
