import {
  linkedinUsername,
  username,
  instagram,
  twitter,
  github,
} from "@/constants/strings";

const linksMetadata = {
  x: "https://x.com/" + twitter,
  linkedin: "https://linkedin.com/in/" + linkedinUsername,
  github: "https://github.com/" + github,
  instagram: "https://instagram.com/" + instagram,
  youtube: "https://youtube.com/@" + username,
};

export default linksMetadata;
