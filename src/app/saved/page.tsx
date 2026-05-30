"use client";

import { useEffect, useState } from "react";

export default function SavedPage() {
  const [savedColleges, setSavedColleges] =
    useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("saved") || "[]"
    );

    setSavedColleges(data);
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Saved Colleges
      </h1>

      {savedColleges.length === 0 ? (
        <p>No saved colleges</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {savedColleges.map((college) => (
            <div
              key={college.id}
              className="bg-white rounded-3xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold">
                {college.name}
              </h2>

              <p className="mt-3">
                📍 {college.location}
              </p>

              <p className="mt-3">
                Fees: ₹{college.fees}
              </p>

              <p className="mt-2">
                ⭐ {college.rating}
              </p>

              <p className="mt-4">
                {college.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}