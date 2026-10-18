import { description, og, title } from "@/constants/strings";
import metadataBuilder from "./builder";

const rootMetadata = metadataBuilder(title, description, {
  keywords: [
    "Mobile",
    "Flutter",
    "Dart",
    "Web",
    "TanStack",
    "React",
    "TypeScript",
  ],
  og,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
});

export default rootMetadata;
