import { queryOptions } from "@tanstack/react-query";
import { mapJobicyJob } from "./mapAdzuna";
import type { Job } from "../model/types";

async function fetchJobs(): Promise<Job[]> {
  const res = await fetch("/api/jobs");
  if (!res.ok) throw new Error("Failed to fetch jobs");
  const raw = await res.json();
  return raw.map(mapJobicyJob);
}

export function jobsQueryOptions() {
  return queryOptions({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });
}