"use client";

import {
  Search,
  GraduationCap,
  Building2,
} from "lucide-react";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FilterSidebar from "@/components/FilterSidebar";
import CollegeCard from "@/components/CollegeCard";
import { useEffect, useState } from "react";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  description: string;
};

export default function Home() {
  const [colleges, setColleges] = useState<any[]>([]);

  const [search, setSearch] = useState("");
  const [
  selectedLocation,
  setSelectedLocation,
] = useState("");

const [
  selectedRating,
  setSelectedRating,
] = useState("");

  useEffect(() => {
    async function fetchColleges() {
      const res = await fetch("/api/colleges");
const data = await res.json();

console.log("API Response:", data);

setColleges(Array.isArray(data) ? data : []);
      console.log(data);
      
    }

    fetchColleges();
  }, []);

  const filteredColleges = (Array.isArray(colleges) ? colleges : []).filter(
  (college) => {
    const matchesSearch =
      college.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      college.location
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesLocation =
      selectedLocation === "" ||
      college.location ===
        selectedLocation;

    const matchesRating =
      selectedRating === "" ||
      college.rating >=
        Number(selectedRating);

    return (
      matchesSearch &&
      matchesLocation &&
      matchesRating
    );
  }
);

  return (
    <main className="min-h-screen bg-[#f5f5ff] dark:bg-slate-950 transition-colors duration-300">
      {/* NAVBAR */}


  <Navbar />

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
  Discover The Best
  <span className="text-indigo-600">
    {" "}Colleges
  </span>
  <br />
  For Your Future
</h1>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-xl">
  Compare rankings, fees,
  placements and reviews from
  India's top colleges in one place.
</p>
<section className="max-w-7xl mx-auto px-6 py-10">
  <div className="grid grid-cols-3 gap-6">

    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 text-center shadow-lg">
      <h2 className="text-4xl font-bold text-indigo-600">
        500+
      </h2>
      <p>Colleges</p>
    </div>

    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 text-center shadow-lg">
      <h2 className="text-4xl font-bold text-indigo-600">
        50K+
      </h2>
      <p>Students</p>
    </div>

    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 text-center shadow-lg">
      <h2 className="text-4xl font-bold text-indigo-600">
        1000+
      </h2>
      <p>Comparisons</p>
    </div>

  </div>
</section>

          {/* SEARCH */}

          <div className="bg-white mt-8 rounded-2xl p-4 flex items-center shadow-lg">
            <Search className="text-gray-400" />

            <input
              type="text"
              placeholder="Search colleges..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full outline-none px-4"
            />
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl">
              Explore Colleges
            </button>

            <button className="border px-6 py-3 rounded-xl">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}

        <div className="bg-gradient-to-r from-indigo-900 to-indigo-500 dark:from-slate-900 dark:to-slate-800 text-white rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-bold leading-tight">
            Compare Top Colleges Easily
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Discover rankings, fees,
            placements and ratings in one
            place.
          </p>

          <button className="mt-8 bg-orange-500 px-6 py-3 rounded-xl text-lg">
            Start Comparing
          </button>
        </div>
      </section>

      {/* COLLEGES SECTION */}

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">
            Featured Colleges
          </h2>

          <Link
            href="/compare"
            className="text-indigo-600 font-semibold"
          >
            View Compare →
          </Link>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
  {/* SIDEBAR */}

  <div className="lg:col-span-1">
    <FilterSidebar
      selectedLocation={
        selectedLocation
      }
      setSelectedLocation={
        setSelectedLocation
      }
      selectedRating={
        selectedRating
      }
      setSelectedRating={
        setSelectedRating
      }
    />
  </div>

  {/* COLLEGES */}

  <div className="lg:col-span-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
    
    {filteredColleges.map((college) => (
  <CollegeCard
    key={college.id}
    college={college}
  />
))}
  </div>
</div>
      </section>
    </main>
  );
}