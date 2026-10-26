import { queryOptions } from "@tanstack/react-query";
import { mapJobicyJob } from "./mapAdzuna";
import type { Job } from "../model/types";


export interface JobFilters {
  query: string;
  location: string;
  category: string;
  categories: string[];
  jobTypes: string[];
  experience: string[];
  datePosted: "all" | "hour" | "24h" | "7d" | "30d";
  salaryMax: number;
}

async function fetchJobs(count: string, tag?: string): Promise<Job[]> {
  const params = new URLSearchParams({ count });
  if (tag) params.set("tag", tag);

  const res = await fetch(`/api/jobs?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  const raw = await res.json();
  return raw.map(mapJobicyJob);
}


function splitLocation(location: string): string[] {
  return location.split(",").map((s) => s.trim()).filter(Boolean);
}


function deriveExperience(title: string): string {
  const t = title.toLowerCase();
  if (/senior|lead|head|principal|staff|expert/.test(t)) return "expert";
  if (/middle|intermediate/.test(t)) return "intermediate";
  if (/junior|fresher|trainee|intern/.test(t)) return "fresher";
  return "no-experience";
}


function matchesDate(createdAt: string, datePosted: JobFilters["datePosted"]): boolean {
  if (!datePosted || datePosted === "all") return true;
  const hours = (Date.now() - new Date(createdAt).getTime()) / 36e5;
  if (datePosted === "hour") return hours <= 1;
  if (datePosted === "24h") return hours <= 24;
  if (datePosted === "7d") return hours <= 24 * 7;
  if (datePosted === "30d") return hours <= 24 * 30;
  return true;
}


function filterJobs(jobs: Job[], filters: JobFilters): Job[] {
  const q = filters.query.trim().toLowerCase();
  const loc = filters.location.trim().toLowerCase();
  const cat = filters.category.trim().toLowerCase();

  return jobs.filter((job) => {

    const matchQ = !q ||
      job.title.toLowerCase().includes(q) ||
      job.company.toLowerCase().includes(q);

    const matchLoc = !loc ||
      splitLocation(job.location).some((l) => l.toLowerCase().includes(loc));

    const matchCat = !cat ||
      job.industry.some((i) => i.toLowerCase().includes(cat));

    const matchCats = filters.categories.length === 0 ||
      filters.categories.some((c) =>
        job.industry.some((i) => i.toLowerCase() === c.toLowerCase())
      );

    const matchJobType = filters.jobTypes.length === 0 ||
      filters.jobTypes.some((t) =>
        (job.jobType ?? "").toLowerCase().includes(t.toLowerCase())
      );

    const matchExperience = filters.experience.length === 0 ||
      filters.experience.includes(deriveExperience(job.title));

    const matchDate = matchesDate(job.createdAt, filters.datePosted);

    const matchSalary = !filters.salaryMax ||
      (job.salaryMax ?? 0) >= filters.salaryMax;

    return matchQ && matchLoc && matchCat && matchCats &&
      matchJobType && matchExperience && matchDate && matchSalary;
  });
}

const BASE_JOBS_COUNT = "40";

const jobsBaseQueryOptions = queryOptions({
  queryKey: ["jobs", "list"],
  queryFn: () => fetchJobs(BASE_JOBS_COUNT, "frontend"),
  staleTime: 5 * 60 * 1000,
});

export function jobsQueryOptions(filters: JobFilters) {
  return {
    ...jobsBaseQueryOptions,
    select: (jobs: Job[]) => filterJobs(jobs, filters).slice(0, 10),
  };
}


function deriveFacets(jobs: Job[], field: "location" | "industry" | "jobType") {
  const counts = new Map<string, number>();
  jobs.forEach((job) => {
    const values =
      field === "location" ? splitLocation(job.location) :
      field === "industry" ? job.industry :
      job.jobType ? [job.jobType] : [];
    values.forEach((value) => {
      const name = value.trim();
      if (!name) return;
      counts.set(name, (counts.get(name) ?? 0) + 1);
    });
  });
  return Array.from(counts, ([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function jobCategoriesQueryOptions() {
  return {
    ...jobsBaseQueryOptions,
    select: (jobs: Job[]) => deriveFacets(jobs, "industry").slice(0, 9),
  };
}

export function jobLocationsQueryOptions() {
  return {
    ...jobsBaseQueryOptions,
    select: (jobs: Job[]) => deriveFacets(jobs, "location").slice(0, 12),
  };
}

export function jobTypesQueryOptions() {
  return {
    ...jobsBaseQueryOptions,
    select: (jobs: Job[]) => deriveFacets(jobs, "jobType"),
  };
}
