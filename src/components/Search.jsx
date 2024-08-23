import { Moon, Search as SearchIcon, Sun } from "lucide-react";
import { useState } from "react";

export default function Search() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex items-center justify-between w-full space-x-3 lg:justify-end lg:w-fit">
   
      

      <div className="relative flex-1 mx-3 my-2">
        <input
          type="search"
          className="shadow-sm w-full bg-gray-50 outline-none border-2 border-gray-100 focus:border-[#5C3E32] active:border-[#5C3E32] focus:outline-none active:outline-none focus:ring focus:ring-[#5C3E32] transition-all duration-500 placeholder:text-[#5C3E32] px-11 py-3 text-right rounded-full"
          placeholder="بحث"
        />
        <div className="absolute top-0 left-2 p-0.5 space-x-3 mt-3 mr-4 text-purple-lighter">
          <SearchIcon color="#5C3E32" size={20} />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        {isDark ? (
          <span
            onClick={() => setIsDark(!isDark)}
            className="cursor-pointer border-[1px] rounded-full p-1.5"
          >
            <Moon color="#5C3E32" size={20} />
          </span>
        ) : (
          <span
            onClick={() => setIsDark(!isDark)}
            className="cursor-pointer border-[1px] rounded-full p-1.5"
          >
            <Sun color="#5C3E32" size={20} />
          </span>
        )}
      </div>
    </div>
  );
}
