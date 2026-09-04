import type { Job } from "../model/types";

interface JobicyRaw {
  id: number;
  jobTitle: string;
  companyName: string;
  companyLogo?: string;
  jobGeo: string;
  url: string;
  pubDate: string;
  jobDescription?: string;
}

const FALLBACK_LOGO =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23309689'><rect width='24' height='24' rx='6'/><text x='12' y='16' font-size='12' text-anchor='middle' fill='white'>?</text></svg>";

export function mapJobicyJob(raw: JobicyRaw): Job {
  return {
    id: String(raw.id),
    title: raw.jobTitle,
    company: raw.companyName ?? "Unknown",
    logo: raw.companyLogo || FALLBACK_LOGO,
    createdAt: raw.pubDate,
    category: raw.jobGeo ?? "",
    url: raw.url,
  };
}