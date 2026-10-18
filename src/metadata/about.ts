import { uniqueTags } from "@/components/cards/apps/data/work";
import { author, og, shortAbout, title } from "@/constants/strings";
import metadataBuilder from "./builder";

const aboutTitle = title + " | About";
const aboutDescription = `${author}, ${shortAbout}`;

const aboutMetadata = metadataBuilder(aboutTitle, aboutDescription, {
  og,
  path: "/about",
  keywords: uniqueTags,
});

export default aboutMetadata;
