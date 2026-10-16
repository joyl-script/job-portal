export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  createdAt: string;
  location: string;
  industry: string[];
  url: string;
  salaryMin?: number;
  salaryMax?: number;
  jobType?: string;
}
