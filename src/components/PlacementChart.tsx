"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    year: "2021",
    placement: 78,
  },
  {
    year: "2022",
    placement: 82,
  },
  {
    year: "2023",
    placement: 87,
  },
  {
    year: "2024",
    placement: 92,
  },
];

export default function PlacementChart() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        Placement Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="placement"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
