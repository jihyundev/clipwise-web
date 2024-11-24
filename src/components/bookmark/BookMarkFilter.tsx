import { FilterOrder } from "@/model/bookmark.ts";

const FILTER_OPTIONS: Array<{
  label: string;
  value: FilterOrder;
}> = [
  { label: "정확도순", value: "exact" },
  { label: "최신순", value: "desc" },
  { label: "오래된순", value: "asc" },
];

export const BookMarkFilter = ({
  orderBy,
  setOrderBy,
}: {
  orderBy: FilterOrder;
  setOrderBy: (value: FilterOrder) => void;
}) => {
  return (
    <div className="flex space-x-3 mb-4">
      {FILTER_OPTIONS.map((filter) => (
        <button
          key={filter.value}
          className={`py-2 text-sm font-medium rounded ${
            orderBy === filter.value ? "text-gray-600" : "text-gray-400"
          }`}
          onClick={() => setOrderBy(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
