"use client";

type Props = {
  selectedLocation: string;
  setSelectedLocation: (
    value: string
  ) => void;

  selectedRating: string;
  setSelectedRating: (
    value: string
  ) => void;
};

export default function FilterSidebar({
  selectedLocation,
  setSelectedLocation,
  selectedRating,
  setSelectedRating,
}: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 dark:border-slate-800 border p-6 rounded-3xl shadow-lg h-fit">
      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      {/* LOCATION */}

      <div className="mb-8">
        <h3 className="font-semibold mb-3">
          Location
        </h3>

        <select
          value={selectedLocation}
          onChange={(e) =>
            setSelectedLocation(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-xl"
        >
          <option value="">
            All Locations
          </option>

          <option value="Karnataka">
            Karnataka
          </option>

          <option value="Mumbai">
            Mumbai
          </option>

          <option value="Tamil Nadu">
            Tamil Nadu
          </option>
        </select>
      </div>

      {/* RATING */}

      <div>
        <h3 className="font-semibold mb-3">
          Minimum Rating
        </h3>

        <select
          value={selectedRating}
          onChange={(e) =>
            setSelectedRating(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-xl"
        >
          <option value="">
            Any Rating
          </option>

          <option value="4">
            4+
          </option>

          <option value="4.5">
            4.5+
          </option>

          <option value="4.8">
            4.8+
          </option>
        </select>
      </div>
    </div>
  );
}