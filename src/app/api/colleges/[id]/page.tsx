import { prisma } from "@/lib/prisma";

async function getCollege(id: string) {
  return prisma.college.findUnique({
    where: {
      id,
    },
  });
}

export default async function CollegePage({
  params,
}: {
  params: { id: string };
}) {
  const college = await getCollege(params.id);

  if (!college) {
    return (
      <div className="p-10 text-2xl">
        College not found
      </div>
    );
  }

  return (
    <main className="p-10">
      <div className="border rounded-2xl p-8 shadow-lg">
        <h1 className="text-5xl font-bold">
          {college.name}
        </h1>

        <p className="text-gray-500 mt-4 text-xl">
          📍 {college.location}
        </p>

        <p className="mt-6 text-2xl font-semibold">
          Fees: ₹{college.fees}
        </p>

        <p className="mt-3 text-2xl">
          ⭐ Rating: {college.rating}
        </p>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-3">
            Overview
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            {college.description}
          </p>
        </div>
      </div>
    </main>
  );
}