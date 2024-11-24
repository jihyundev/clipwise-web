import { useState } from "react";
import { SearchIcon, CircleX } from "lucide-react";

export const SearchBar = ({
  onSearch,
}: {
  onSearch: (searchQuery: string) => void;
}) => {
  const [value, setValue] = useState("");

  const onInputKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.key === "Enter") {
      onSearch(target.value);
    }
  };

  return (
    <div className="w-full max-w-[816px] relative mx-4 h-[60px] flex items-center justify-center">
      <input
        type="text"
        maxLength={50}
        value={value}
        placeholder="키워드 또는 URL 입력"
        className="w-full max-w-[700px] py-2.5 pl-12 lg:pl-10 pr-4 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm font-medium"
        onKeyDown={onInputKeydown}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchIcon className="absolute left-[20px] lg:left-[70px] top-1/2 h-4 w-4 transform -translate-y-1/2 text-gray-600" />
      {value && (
        <CircleX
          className="absolute right-[20px] lg:right-[70px] h-4 w-4 text-gray-600 cursor-pointer"
          onClick={() => setValue("")}
        />
      )}
    </div>
  );
};
