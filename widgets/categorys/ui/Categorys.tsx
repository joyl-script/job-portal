"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { jobCategoriesQueryOptions } from "@/entities/job/api/getJobs";

export default function Categorys() {
  const { data: categories, isLoading, isError } = useQuery(jobCategoriesQueryOptions());

  return (
    <section className="bg-[#309689]/10 md:pt-15 pt-10 pb-30">
      <div className="container text-center">
        <div>
          <h1 className="md:text-5xl text-3xl font-bold text-black">Browse by Category</h1>
          <p className="text-black mt-6">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus. </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-15">
            {isLoading &&
              [0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white p-12 rounded-[20px] flex flex-col items-center gap-8 animate-pulse"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#309689]/15" />
                  <div className="h-6 w-32 bg-black/10 rounded" />
                  <div className="h-5 w-20 bg-[#309689]/20 rounded-lg" />
                </div>
              ))}

            {isError && (
              <p className="col-span-full text-black text-center">Не удалось загрузить категории</p>
            )}

            {categories?.map((category) => (
              <div
                key={category.name}
                className="bg-white p-12 rounded-[20px] flex flex-col items-center gap-8 border-2 border-transparent hover:border-[#309689] hover:scale-103 transition-all duration-300 ease-in-out"
              >
                <Image
                  src="/g2898.svg"
                  alt={category.name}
                  width={40}
                  height={40}
                />
                <p className="text-2xl font-bold">{category.name}</p>
                <span className="text-[#309689] bg-[#309689]/10 py-1 px-2 rounded-lg">
                  {category.count} jobs
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}