"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import type { RootState } from "@/store/store";
import {
  jobCategoriesQueryOptions,
  jobLocationsQueryOptions,
  jobTypesQueryOptions,
} from "@/entities/job/api/getJobs";
import {
  setQuery as setQueryFilter,
  setLocation as setLocationFilter,
  toggleCategory,
  toggleJobType,
  toggleExperience,
  setDatePosted,
  setSalaryMax,
  clearFilters,
  type DatePosted,
} from "@/features/search-jobs/model/filtersSlice";

const JOB_TYPES = [
  { value: "full", label: "Full Time" },
  { value: "part", label: "Part Time" },
  { value: "freelance", label: "Freelance" },
  { value: "seasonal", label: "Seasonal" },
  { value: "fixed", label: "Fixed-Price" },
];

const EXPERIENCE = [
  { value: "no-experience", label: "No-experience" },
  { value: "fresher", label: "Fresher" },
  { value: "intermediate", label: "Intermediate" },
  { value: "expert", label: "Expert" },
];

const DATE_OPTIONS: { value: DatePosted; label: string }[] = [
  { value: "all", label: "All" },
  { value: "hour", label: "Last Hour" },
  { value: "24h", label: "Last 24 Hours" },
  { value: "7d", label: "Last 7 Days" },
  { value: "30d", label: "Last 30 Days" },
];

const SALARY_MAX_LIMIT = 300000;

export default function FilterSidebar() {
  const dispatch = useDispatch();
  const filters = useSelector((s: RootState) => s.filters);

  const { data: locations } = useQuery(jobLocationsQueryOptions());
  const { data: categories } = useQuery(jobCategoriesQueryOptions());
  const { data: jobTypes } = useQuery(jobTypesQueryOptions());

  const [query, setQuery] = useState(filters.query);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [salaryDraft, setSalaryDraft] = useState(filters.salaryMax);

  const visibleCategories = useMemo(
    () => (showAllCategories ? categories : categories?.slice(0, 5)),
    [categories, showAllCategories]
  );

  const applySearch = () => dispatch(setQueryFilter(query));

  const isChecked = (list: string[], value: string) => list.includes(value);

  return (
    <aside className="w-full md:w-[320px] shrink-0 bg-[#EAF5F2] rounded-2xl p-6 md:sticky md:top-24 h-fit mb-10 md:mb-0">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold text-black">Filters</h3>
        <button
          onClick={() => {
            dispatch(clearFilters());
            setQuery("");
            setSalaryDraft(0);
            setShowAllCategories(false);
          }}
          className="text-[#309689] text-sm cursor-pointer hover:underline"
        >
          Clear all
        </button>
      </div>


      <p className="font-semibold text-black mb-2">Search by Job Title</p>
      <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 mb-6">
        <Image src="/search.svg" alt="search" width={16} height={16} />
        <input
          type="text"
          value={query}
          placeholder="Job title or company"
          className="outline-none w-full text-sm text-black placeholder-black/40"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && applySearch()}
        />
      </div>


      <p className="font-semibold text-black mb-2">Location</p>
      <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 mb-6">
        <Image src="/map-pin.svg" alt="location" width={16} height={16} />
        <select
          value={filters.location}
          onChange={(e) => dispatch(setLocationFilter(e.target.value))}
          className="outline-none w-full text-sm text-black cursor-pointer bg-transparent"
        >
          <option value="">Choose city</option>
          {locations?.map(({ name }) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>


      <p className="font-semibold text-black mb-2">Category</p>
      <div className="mb-2">
        {visibleCategories?.map(({ name, count }) => (
          <label key={name} className="flex items-center justify-between py-1.5 cursor-pointer text-black text-sm">
            <span className="flex items-center gap-2.5">
              <input
                type="checkbox"
                checked={isChecked(filters.categories, name)}
                onChange={() => dispatch(toggleCategory(name))}
                className="accent-[#309689] w-4 h-4"
              />
              {name}
            </span>
            <span className="bg-white rounded-md px-2 py-0.5 text-xs text-black/60">{count}</span>
          </label>
        ))}
      </div>
      {categories && categories.length > 5 && (
        <button
          onClick={() => setShowAllCategories((v) => !v)}
          className="w-full bg-[#309689] hover:bg-[#267a6f] transition-colors text-white text-sm font-medium rounded-lg py-2.5 mb-6 cursor-pointer"
        >
          {showAllCategories ? "Show Less" : "Show More"}
        </button>
      )}


      <p className="font-semibold text-black mt-4 mb-2">Job Type</p>
      <div className="mb-6">
        {JOB_TYPES.map(({ value, label }) => {
          const count = jobTypes?.find((t) => t.name.toLowerCase().includes(value))?.count;
          return (
            <label key={value} className="flex items-center justify-between py-1.5 cursor-pointer text-black text-sm">
              <span className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={isChecked(filters.jobTypes, value)}
                  onChange={() => dispatch(toggleJobType(value))}
                  className="accent-[#309689] w-4 h-4"
                />
                {label}
              </span>
              {count !== undefined && (
                <span className="bg-white rounded-md px-2 py-0.5 text-xs text-black/60">{count}</span>
              )}
            </label>
          );
        })}
      </div>


      <p className="font-semibold text-black mb-2">Experience Level</p>
      <div className="mb-6">
        {EXPERIENCE.map(({ value, label }) => (
          <label key={value} className="flex items-center gap-2.5 py-1.5 cursor-pointer text-black text-sm">
            <input
              type="checkbox"
              checked={isChecked(filters.experience, value)}
              onChange={() => dispatch(toggleExperience(value))}
              className="accent-[#309689] w-4 h-4"
            />
            {label}
          </label>
        ))}
      </div>


      <p className="font-semibold text-black mb-2">Date Posted</p>
      <div className="mb-6">
        {DATE_OPTIONS.map(({ value, label }) => (
          <label key={value} className="flex items-center gap-2.5 py-1.5 cursor-pointer text-black text-sm">
            <input
              type="radio"
              name="datePosted"
              checked={filters.datePosted === value}
              onChange={() => dispatch(setDatePosted(value))}
              className="accent-[#309689] w-4 h-4"
            />
            {label}
          </label>
        ))}
      </div>


      <p className="font-semibold text-black mb-3">Salary</p>
      <input
        type="range"
        min={0}
        max={SALARY_MAX_LIMIT}
        step={1000}
        value={salaryDraft}
        onChange={(e) => setSalaryDraft(Number(e.target.value))}
        className="w-full accent-[#309689] cursor-pointer mb-3"
      />
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-black">
          Salary: $0 - <span className="text-[#309689] font-semibold">${salaryDraft}</span>
        </p>
        <button
          onClick={() => dispatch(setSalaryMax(salaryDraft))}
          className="bg-[#309689] hover:bg-[#267a6f] transition-colors text-white text-xs font-medium rounded-lg px-4 py-1.5 cursor-pointer"
        >
          Apply
        </button>
      </div>


      {categories && categories.length > 0 && (
        <>
          <p className="font-semibold text-black mb-3">Tags</p>
          <div className="flex flex-wrap gap-2">
            {categories.map(({ name }) => {
              const active = isChecked(filters.categories, name);
              return (
                <button
                  key={name}
                  onClick={() => dispatch(toggleCategory(name))}
                  className={`text-xs rounded-lg px-3 py-1.5 cursor-pointer transition-colors ${active
                      ? "bg-[#309689] text-white"
                      : "bg-white text-black/70 hover:text-black"
                    }`}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </>
      )}
    </aside>
  );
}
