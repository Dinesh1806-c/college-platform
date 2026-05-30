"use client";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search colleges..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-3 rounded-lg w-full mb-6"
    />
  );
}