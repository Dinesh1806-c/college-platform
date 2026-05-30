import Link from "next/link";

export default function CollegeCard({
  college,
}: any) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <img
        src={college.image}
        alt={college.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">
            {college.name}
          </h3>

          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">
            ⭐ {college.rating}
          </span>
        </div>

        <p className="text-gray-500 mt-2">
          📍 {college.location}
        </p>

        <p className="mt-4">
          <strong>Fees:</strong> ₹{college.fees}
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {college.description}
        </p>

        <Link
          href={`/college/${college.id}`}
          className="inline-block mt-6 bg-indigo-600 text-white px-5 py-3 rounded-xl"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}