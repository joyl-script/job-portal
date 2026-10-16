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
  jobIndustry?: string[];
  jobType?: string;
  salary_min?: number;
  salary_max?: number;
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
    location: raw.jobGeo ?? "",
    industry: raw.jobIndustry ?? [],
    url: raw.url,
    salaryMin: raw.salary_min,
    salaryMax: raw.salary_max,
    jobType: raw.jobType,
  };
}