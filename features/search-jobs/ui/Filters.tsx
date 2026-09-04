"use client";

import Image from "next/image";
import { useState } from "react";

export default function Filters() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const HandleClick = () => {
    console.log({ query, location, category });
  };

  const locations = ["Riga", "Vilnius", "Tallinn", "Remote"];
  const categories = ["Design", "Development", "Marketing", "Sales"];

  return (
    <div className="flex flex-col md:flex-row w-full max-w-[810px] items-stretch md:items-center bg-white rounded-2xl md:rounded-full p-4 md:p-2 mt-10 gap-1 md:gap-0">

      <input
        type="text"
        value={query}
        placeholder="Job Title or Company"
        className="outline-none placeholder-black opacity-50 pl-2 md:pl-4 py-3 md:py-0 border-b md:border-b-0 border-[#C7C7C7]"
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="hidden md:block w-px h-10 bg-[#C7C7C7] opacity-70 mx-3" />

      <div className="relative flex gap-3 border-b md:border-b-0 border-[#C7C7C7] py-3 md:py-0">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="outline-none text-black opacity-50 cursor-pointer bg-transparent w-full pl-2 md:pl-0"
        >
          <option value="">Select Location</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden md:block w-px h-10 bg-[#C7C7C7] opacity-70 mx-3" />

      <div className="relative flex gap-3 py-3 md:py-0">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="outline-none text-black opacity-50 cursor-pointer bg-transparent w-full pl-2 md:pl-0"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={HandleClick}
        className="cursor-pointer md:ml-auto flex items-center justify-center gap-2 bg-[#309689] hover:bg-[#267a6f] transition-colors rounded-full text-white px-6 py-4 shrink-0 mt-3 md:mt-0"
      >
        <Image src="/search.svg" alt="search" width={16} height={16} />
        Search Job
      </button>
    </div>
  );

}



