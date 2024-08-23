import { ChevronDown } from "lucide-react";
import { useState } from "react";


export default function Navbar() {
  const [activePage, setActivePage] = useState("الرئيسية");
  return (
    <div className="pt-1.5 hidden lg:flex">
    <div className="container mx-auto max-w-7xl p-2 ">
    <ul className="flex justify-center">
          <li className="relative">
            <a
              onClick={() => setActivePage('الرئيسية')}
              className={`mr-10 font-[500] text-[16.5px] cursor-pointer transition-all ${
                activePage === 'الرئيسية' 
                  ? 'text-[#B4815B] after:content[*] after:w-2 after:h-2 after:absolute after:bg-[#B4815B] after:-bottom-[10%]  after:left-1/4 after:rounded-full '
                  : 'text-[#3D3D3D] hover:text-[#B4815B]'
              }`}
            >
              الرئيسية
            </a>
          </li>
          <li className="relative">
            <a>
           

           <div className="relative inline-block text-left">
    <div className="group">
        <button 
         onClick={() => setActivePage("نسائى")}
         className={`mr-10 font-[500] text-[16.5px] cursor-pointer transition-all ${
           activePage === "نسائى" 

             ? 'text-[#B4815B] after:content[*] after:w-2 after:h-2 after:absolute after:bg-[#B4815B] after:-bottom-[10%]   after:left-1/4 after:rounded-full '
             : 'text-[#3D3D3D] hover:text-[#B4815B]'
         }`}

        type="button"
            >
           <span className="flex">
           <ChevronDown />
           نسائى
           </span>
        </button>

      
        <div
            className="absolute z-50 left-0 w-40 mt-0 bottom-[1] origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div className="py-3">
                <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">فستانين</a>
                <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">جواكيت</a>
                <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">بناطيل</a>

            </div>
        </div>
    </div>
</div>
            </a>
          </li>
          <li className="relative">
            <a>
           

           <div className="relative inline-block text-left">
    <div className="group">
        <button 
         onClick={() => setActivePage("رجالى")}
         className={`mr-10 font-[500] text-[16.5px] cursor-pointer transition-all ${
           activePage === "رجالى" 

             ? 'text-[#B4815B] after:content[*] after:w-2 after:h-2 after:absolute after:bg-[#B4815B] after:-bottom-[10%]   after:left-1/4 after:rounded-full '
             : 'text-[#3D3D3D] hover:text-[#B4815B]'
         }`}

        type="button"
            >
           <span className="flex">
           <ChevronDown />
           رجالى
           </span>
        </button>

      
        <div
            className="absolute z-50  left-0 w-40 mt-0 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div className="py-3">
                <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">قمصان</a>
                <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">تيشرتات</a>
                <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">بناطيل</a>
                <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">شورتات</a>

            </div>
        </div>
    </div>
</div>
            </a>
          </li>
          <li className="relative">
            <a
              onClick={() => setActivePage('عبايات')}
              className={`mr-10 font-[500] text-[16.5px] cursor-pointer transition-all ${
                activePage === 'عبايات' 
                  ? 'text-[#B4815B] after:content[*] after:w-2 after:h-2 after:absolute after:bg-[#B4815B] after:-bottom-[10%]   after:left-1/4 after:rounded-full '
                  : 'text-[#3D3D3D] hover:text-[#B4815B]'
              }`}
            >
              عبايات
            </a>
          </li>
          <li className="relative">
            <a
              onClick={() => setActivePage('عطور')}
              className={`mr-10 font-[500] text-[16.5px] cursor-pointer transition-all ${
                activePage === 'عطور' 
                  ? 'text-[#B4815B] after:content[*] after:w-2 after:h-2 after:absolute after:bg-[#B4815B] after:-bottom-[10%]   after:left-1/4 after:rounded-full '
                  : 'text-[#3D3D3D] hover:text-[#B4815B]'
              }`}
            >
              عطور
            </a>
          </li>
          <li className="relative">
            <a
              onClick={() => setActivePage('تخفيضات')}
              className={`mr-10 font-[500] text-[16.5px] cursor-pointer transition-all ${
                activePage === 'تخفيضات' 
                  ? 'text-[#B4815B] after:content[*] after:w-2 after:h-2 after:absolute after:bg-[#B4815B] after:-bottom-[10%]   after:left-1/4 after:rounded-full '
                  : 'text-[#3D3D3D] hover:text-[#B4815B]'
              }`}
            >
             
           تخفيضات
              
 


<div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

            </a>
          </li>
          <li className="relative">
            <a
              onClick={() => setActivePage('المدونة')}
              className={`mr-10 font-[500] text-[16.5px] cursor-pointer transition-all ${
                activePage === 'المدونة' 
                  ? 'text-[#B4815B] after:content[*] after:w-2 after:h-2 after:absolute after:bg-[#B4815B] after:-bottom-[10%]   after:left-1/4 after:rounded-full '
                  : 'text-[#3D3D3D] hover:text-[#B4815B]'
              }`}
            >
             المدونة
            </a>
          </li>
          
        </ul>
    </div>
    </div>
  )
}
