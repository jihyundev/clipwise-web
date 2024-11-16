import { SearchIcon } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="w-full max-w-[810px] relative mx-4 h-[60px] flex items-center">
      <input
        type="text"
        placeholder="키워드 또는 URL 입력"
        className="w-full max-w-[700px] py-2.5 pl-10 pr-4 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm font-medium"
      />
      <SearchIcon
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600"
        size={20}
      />
    </div>
  );
};
