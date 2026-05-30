"use client";
import { useRouter } from "next/navigation";
import PlacementChart from "@/components/PlacementChart";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] =
    useState<any>(null);

  useEffect(() => {
  const storedUser =
    localStorage.getItem("user");

  if (!storedUser) {
    router.push("/login");
    return;
  }

  setUser(
    JSON.parse(storedUser)
  );
}, [router]);

  return (
    <div className="max-w-7xl mx-auto p-10">

      <div className="flex items-center justify-between">
  <h1 className="text-4xl font-bold">
    Welcome {user?.name || "Student"} 👋
  </h1>

  <button
    onClick={() => {
      localStorage.removeItem("user");

      router.push("/login");
    }}
    className="bg-red-500 text-white px-5 py-2 rounded-xl"
  >
    Logout
  </button>
</div>
      

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow">
          <h2 className="text-3xl font-bold">5</h2>
          <p>Saved Colleges</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow">
          <h2 className="text-3xl font-bold">2</h2>
          <p>Compared Colleges</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow">
          <h2 className="text-3xl font-bold">1</h2>
          <p>Applications</p>
        </div>

      </div>

      <div className="mt-10">
        <PlacementChart />
      </div>

    </div>
  );
}