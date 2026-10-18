import { og, title } from "@/constants/strings";
import metadataBuilder from "./builder";

const contactTitle = title + " | Contact";
const contactDescription =
  "Contact me by filling the contact form below, or reach me out on social media";

const contactMetadata = metadataBuilder(contactTitle, contactDescription, {
  og,
  path: "/contact",
});

export default contactMetadata;
