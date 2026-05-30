"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  GraduationCap,
  Stethoscope,
  Scale,
  Palette,
  BriefcaseBusiness,
  School,
  Moon,
  Sun,
} from "lucide-react";

const categories = [
  {
    name: "Engineering",
    icon: GraduationCap,
  },
  {
    name: "Medicine",
    icon: Stethoscope,
  },
  {
    name: "Design",
    icon: Palette,
  },
  {
    name: "Law",
    icon: Scale,
  },
  {
    name: "Management",
    icon: BriefcaseBusiness,
  },
  {
    name: "School",
    icon: School,
  },
];

export default function Navbar() {
  const [darkMode, setDarkMode] =
  useState(false);
  useEffect(() => {
  const savedTheme =
    localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add(
      "dark"
    );

    setDarkMode(true);
  }
}, []);
    
  return (
    <div className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b dark:border-slate-800 sticky top-0 z-50">
      {/* TOP NAV */}

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400">
            CollegeHub
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-4">
            <button
  onClick={() => {
    if (darkMode) {
      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    } else {
      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );
    }

    setDarkMode(!darkMode);
  }}
  className="border dark:border-slate-700 p-2 rounded-xl bg-white dark:bg-slate-900"
>
  {darkMode ? (
    <Sun size={20} />
  ) : (
    <Moon size={20} />
  )}
</button>
  <Link
    href="/compare"
    className="bg-black dark:bg-slate-800 text-white px-5 py-2 rounded-xl"
  >
    Compare
  </Link>

  <Link
    href="/saved"
    className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl"
  >
    Saved
  </Link>
<Link
  href="/dashboard"
  className="bg-green-600 text-white px-5 py-2 rounded-xl"
>
  Dashboard
</Link>
  <Link
    href="/signup"
    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl"
  >
    Signup
  </Link>
</div>
      </div>

      {/* CATEGORY MENU */}

      <div className="border-t bg-[#fafaff] dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-8">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition"
              >
                <Icon size={20} />

                <span className="font-medium">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}