import { uniqueTags } from "@/components/cards/apps/data/work";
import { og, title } from "@/constants/strings";
import metadataBuilder from "./builder";

const workTitle = title + " | Work";
const workDescription = "A selection of my work and projects";

const workMetadata = metadataBuilder(workTitle, workDescription, {
  og,
  path: "/work",
  keywords: uniqueTags,
});

export default workMetadata;
