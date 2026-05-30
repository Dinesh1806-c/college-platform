"use client";

import { useEffect, useState } from "react";

export default function ComparePage() {
  const [colleges, setColleges] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("compare") || "[]"
    );

    setColleges(data);
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f5ff] p-10">
      <h1 className="text-5xl font-bold mb-10">
        Compare Colleges
      </h1>

      {colleges.length === 0 ? (
        <div className="bg-white p-10 rounded-3xl shadow-lg">
          <p className="text-xl">
            No colleges selected for comparison
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-3xl shadow-lg">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-5 text-left">
                  Feature
                </th>

                {colleges.map((college) => (
                  <th
                    key={college.id}
                    className="p-5 text-left"
                  >
                    {college.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* LOCATION */}

              <tr className="border-b">
                <td className="p-5 font-bold">
                  Location
                </td>

                {colleges.map((college) => (
                  <td
                    key={college.id}
                    className="p-5"
                  >
                    📍 {college.location}
                  </td>
                ))}
              </tr>

              {/* FEES */}

              <tr className="border-b bg-gray-50">
                <td className="p-5 font-bold">
                  Fees
                </td>

                {colleges.map((college) => (
                  <td
                    key={college.id}
                    className="p-5"
                  >
                    ₹{college.fees}
                  </td>
                ))}
              </tr>

              {/* RATING */}

              <tr className="border-b">
                <td className="p-5 font-bold">
                  Rating
                </td>

                {colleges.map((college) => (
                  <td
                    key={college.id}
                    className="p-5"
                  >
                    ⭐ {college.rating}
                  </td>
                ))}
              </tr>

              {/* DESCRIPTION */}

              <tr>
                <td className="p-5 font-bold">
                  Overview
                </td>

                {colleges.map((college) => (
                  <td
                    key={college.id}
                    className="p-5"
                  >
                    {college.description}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}