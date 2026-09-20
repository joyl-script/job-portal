import { queryOptions } from "@tanstack/react-query";
import { mapJobicyJob } from "./mapAdzuna";
import type { Job } from "../model/types";


interface JobFilters {
  query: string;
  location: string;
  category: string;
}

async function fetchJobs(count: string, tag?: string): Promise<Job[]> {
  const params = new URLSearchParams({ count });
  if (tag) params.set("tag", tag);

  const res = await fetch(`/api/jobs?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch jobs");
  const raw = await res.json();
  return raw.map(mapJobicyJob);
}


function filterJobs(jobs: Job[], filters: JobFilters): Job[] {
  const q = filters.query.trim().toLowerCase();
  const loc = filters.location.trim().toLowerCase();
  const cat = filters.category.trim().toLowerCase();

  return jobs.filter((job) => {

    const matchQ = !q ||
      job.title.toLowerCase().includes(q) ||
      job.company.toLowerCase().includes(q);

    const matchLoc = !loc || job.category.toLowerCase().includes(loc);

    const matchCat = !cat ||
      job.title.toLowerCase().includes(cat) ||
      job.company.toLowerCase().includes(cat);
    return matchQ && matchLoc && matchCat;
  });
}

export function jobsQueryOptions(filters: JobFilters) {
  return queryOptions({
    queryKey: ["jobs"],
    queryFn: () => fetchJobs("10", "frontend"),
    select: (jobs) => filterJobs(jobs, filters),
  });
}

// для блока категорий: тянем больше вакансий и считаем количество по каждой индустрии
export function jobCategoriesQueryOptions() {
  return queryOptions({
    queryKey: ["jobs", "categories"],
    queryFn: () => fetchJobs("50"),
    select: (jobs) => {
      const counts = new Map<string, number>();
      jobs.forEach((job) => {
        const name = job.industry[0]?.trim();
        if (!name) return;
        counts.set(name, (counts.get(name) ?? 0) + 1);
      });
      return Array.from(counts, ([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 8);
    },
  });
}