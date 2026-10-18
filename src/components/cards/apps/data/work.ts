import AppItemType from "./app";
import { mobileApps } from "./mobile-apps";
import { webApps } from "./web-apps";

export const allWork: AppItemType[] = [...webApps, ...mobileApps];

// Descriptions end with "Built at X." or "Collaborated with X." when the work
// was done for someone else; surface that as the client name.
const clientPattern = /(?:Built at|Collaborated with)\s+([^.]+)\.?\s*$/;

export const clientOf = (work: AppItemType) =>
  work.description.match(clientPattern)?.[1]?.trim();

// Description without the trailing client sentence.
export const summaryOf = (work: AppItemType) =>
  work.description.replace(clientPattern, "").trim();

export const clients = allWork
  .map(clientOf)
  .filter((client, index, array): client is string =>
    !!client && array.indexOf(client) === index
  );

export const workIndex = (index: number) => String(index + 1).padStart(3, "0");

export const uniqueTags = allWork
  .map((item) => item.tags || [])
  .flat()
  .filter((item, index, array) => array.indexOf(item) === index)
  .sort();
