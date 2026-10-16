"use client";

import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { jobsQueryOptions } from "@/entities/job/api/getJobs";
import type { RootState } from "@/store/store";
import Tilt from "@/widgets/tilt/ui/Tilt";
import Link from "next/link";

type vacancyType = {
  title?: string
  desc?: string
  button?: string
}

export default function Vacancy({ title, desc, button }: vacancyType) {
  const filters = useSelector((s: RootState) => s.filters);
  const { data: jobs, isLoading, isError } = useQuery(jobsQueryOptions(filters));

  return (
    <section className="py-15">
      <div className="container">
        <div>
          <h1 className="text-black md:text-5xl text-3xl font-bold text-center md:text-left">{title}</h1>
          <div className="flex justify-between items-baseline">
            <p className="text-black md:mt-10 mt-5 text-center md:text-left">{desc}</p>
            <Link href={'/jobs'} className="text-[#309689] text-2xl border-b-2 border-[#309689] cursor-pointer font-semibold hover:text-[#65c1b4] transition-colors duration-300 ease-in-out hidden md:flex">{button}</Link>
          </div>
        </div>

        <div className="md:mt-25 mt-15">
          <div className="w-full">
            {isLoading && (
              <div className="space-y-6">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-white shadow-[0_3px_8px_0_rgba(48,150,137,0.08)] p-6 md:p-10 rounded-3xl animate-pulse"
                  >
                    <div className="h-4 w-20 bg-[#309689]/20 rounded-lg" />
                    <div className="mt-8 md:mt-15 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#309689]/15 shrink-0" />
                        <div className="space-y-3">
                          <div className="h-5 w-56 md:w-72 bg-black/10 rounded" />
                          <div className="h-4 w-32 bg-black/10 rounded" />
                        </div>
                      </div>
                      <div className="h-11 w-full md:w-32 bg-[#309689]/20 rounded-lg" />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {isError && <p className="text-black md:mt-10 mt-5 text-center md:text-left">Не удалось загрузить вакансии</p>}

            {!isLoading && !isError && jobs?.length === 0 && (
              <p className="text-black/60 md:mt-10 mt-5 text-center md:text-left">
                По этим фильтрам ничего не найдено — попробуйте изменить запрос или сбросить фильтры.
              </p>
            )}

            {jobs?.map((job) => (
              <Tilt key={job.id}>
                <div className="bg-white shadow-[0_3px_8px_0_rgba(48,150,137,0.08)] p-6 md:p-10 rounded-3xl mb-6">			<div className="flex items-center justify-between">
                  <p className="text-[#309689] bg-[#309689]/10 p-1 rounded-lg text-sm">
                    {new Date(job.createdAt).toLocaleDateString()}
                  </p>
                </div>
                  <div className="mt-8 md:mt-15 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
                    <div className="flex items-center gap-4">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="w-14 h-14 rounded-xl object-cover border border-black/10 shrink-0"
                        loading="lazy"
                      />
                      <div className="ml-2">
                        <h4 className="text-xl md:text-3xl font-semibold text-black">{job.title}</h4>
                        <p className="text-black text-sm md:text-base">{job.company}</p>
                      </div>
                    </div>
                    <a
                      href={job.url}
                      target="_blank"
                      className="bg-[#309689] text-white py-3.5 px-5 rounded-lg cursor-pointer font-semibold hover:bg-[#55bfb1] transition-colors duration-300 ease-in-out w-full md:w-auto text-center"
                    >
                      Job details
                    </a>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}