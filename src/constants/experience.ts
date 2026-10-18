// Sourced from the LinkedIn profile (linkedin.com/in/phengvisal).
// Months are 1-based; `end` is omitted for the current role.

export type Experience = {
  company: string;
  role: string;
  start: { year: number; month: number };
  end?: { year: number; month: number };
  location: string;
  highlights?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Smart Axiata",
    role: "Application Developer",
    start: { year: 2026, month: 9 },
    location: "Phnom Penh",
  },
  {
    company: "Pointer Property",
    role: "Senior Backend Developer",
    start: { year: 2024, month: 4 },
    end: { year: 2026, month: 8 },
    location: "Phnom Penh",
    highlights: [
      "Developed and maintained internal tools and platform features, including the company's CRM system and Property Valuation System.",
      "Built AgentHub, a platform connecting agents, buyers, and sellers through a marketplace and back-office APIs.",
      "Developed PropertyHub, a centralized property marketplace for searching and discovering properties across Cambodia.",
      "Developed and trained the eValuer Prediction Model, a property price estimation tool built on Google Cloud Platform and Vertex AI.",
      "Managed integration of a secure payment gateway for online transactions, ensuring regulatory compliance and a smooth transaction flow.",
      "Led integration of new technologies to improve performance, scalability, and user experience; enhanced security and optimized core processes.",
      "Ran regular code reviews and took part in agile sprint planning, retrospectives, and stand-ups with cross-functional teams.",
    ],
  },
  {
    company: "Cambodia Academy of Digital Technology",
    role: "Full Stack Developer",
    start: { year: 2023, month: 1 },
    end: { year: 2023, month: 12 },
    location: "Phnom Penh",
    highlights: [
      "Full-stack development on platforms supporting national digital transformation initiatives, built with Next.js, TypeScript, and NestJS.",
    ],
  },
  {
    company: "Viniyuk",
    role: "Full Stack Developer",
    start: { year: 2021, month: 10 },
    end: { year: 2022, month: 12 },
    location: "Phnom Penh",
    highlights: [
      "Designed and built complete web systems end-to-end, from database schema to API to frontend, using Vue.js and Laravel.",
    ],
  },
];

export const education = {
  school: "Cambodia Academy of Digital Technology",
  degree: "Bachelor's degree, Computer Science",
  start: { year: 2019, month: 11 },
  end: { year: 2023, month: 6 },
};

export const honors = [
  { title: "Techno Innovation Challenge 2021", detail: "Runner-Up Team" },
  { title: "EF SET English Certificate", detail: "C2 Proficient" },
];

export const topSkills = ["Strapi.js", "DigitalOcean", "Claude Code"];

export const currentRole = experiences.find((experience) => !experience.end);

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const formatMonth = ({ year, month }: { year: number; month: number }) =>
  `${monthNames[month - 1]} ${year}`;

export const formatPeriod = (item: {
  start: { year: number; month: number };
  end?: { year: number; month: number };
}) => `${formatMonth(item.start)} – ${item.end ? formatMonth(item.end) : "Present"}`;

// Whole years since the first role started.
export const yearsOfExperience = (() => {
  const first = experiences[experiences.length - 1].start;
  const now = new Date();
  const months =
    (now.getFullYear() - first.year) * 12 + (now.getMonth() + 1 - first.month);
  return Math.max(1, Math.floor(months / 12));
})();
