import { useState } from "react";
import { ChevronLeft, CircleX, Database, ShoppingCart, User } from "lucide-react";
import { CgMenuRight } from "react-icons/cg";
import Logo from "./Logo";
import Search from "./Search";

export default function TopNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("الرئيسية");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full lg:pt-1.5  px-2 text-left">
      <div className="container mx-auto max-w-7xl p-4 text-left">
        <div className="flex items-center flex-col justify-between lg:flex-row">
          <Search />
          <div className="flex items-center justify-between w-full lg:hidden mt-3">
            <button
              onClick={toggleSidebar}
              className="block p-1.5 rounded-md hover:bg-gray-100 border-2 border-gray-50 cursor-pointer"
            >
              <CgMenuRight size={24} color="#5C3E32" />
            </button>
            <Logo />
            <div className="flex items-center gap-5">
              <Database className="cursor-pointer" size={20} color="#5C3E32" />
              <div className="relative">
                <ShoppingCart className="cursor-pointer" size={20} color="#5C3E32" />
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#B4815B] rounded-full -top-2 -end-0.5 dark:border-gray-900">
                  0
                </div>
              </div>
              <User className="cursor-pointer" size={20} color="#5C3E32" />
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <Logo />
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-5">
              <Database className="cursor-pointer" size={20} color="#5C3E32" />
              <div className="relative">
                <ShoppingCart className="cursor-pointer" size={20} color="#5C3E32" />
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#B4815B] rounded-full -top-2 -end-0.5 dark:border-gray-900">
                  0
                </div>
              </div>
              <User className="cursor-pointer" size={20} color="#5C3E32" />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden" />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-full md:w-[60%] bg-white shadow-lg transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-50`}
      >
        <div className="flex justify-around pt-4">
          <div>
            <Logo />
          </div>

          <div className="self-start p-4">
            <button 
              onClick={toggleSidebar} 
              className="self-start mb-4 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <CircleX size={30} color="gray" />
            </button>
          </div>
        </div>

        <ul className="flex justify-center flex-col gap-8 text-right mt-8 pr-6">
          <li className="relative ">
            <button
              onClick={() => setActivePage('الرئيسية')}
              className={`font-[500] text-[16.5px] cursor-pointer transition-all  
                after:content[*] after:border-b-2  after:w-[90%] after:h-[2px] after:absolute after:right-0 after:bottom-[-10px]
                ${
                activePage === 'الرئيسية' 
                  ? 'text-[#B4815B]  '
                  : 'text-[#3D3D3D] hover:text-[#B4815B]'
              }`}
            >
              الرئيسية
            </button>
          </li>
          <li className="relative after:content[*] after:border-b-2  after:w-[90%] after:h-[2px] after:absolute after:right-0 after:bottom-[-10px]">
            <div className="relative inline-block">
              <div className="group">
                <button 
                  onClick={() => setActivePage("نسائى")}
                  className={`font-[500] text-[16.5px] cursor-pointer flex items-center  transition-all
                    ${activePage === "نسائى" ? 'text-[#B4815B]' : 'text-[#3D3D3D] hover:text-[#B4815B]'}
                  `}
                  type="button"
                >
                  نسائى
                  <ChevronLeft className="mr-3 text-left" size={14} />
                </button>

                <div className="absolute z-10 right-[100%] top-0 w-40 mt-0 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">فساتين</a>
                    <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">جواكيت</a>
                    <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">بناطيل</a>
                    <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">طرح</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative after:content[*] after:border-b-2  after:w-[90%] after:h-[2px] after:absolute after:right-0 after:bottom-[-10px]">
            <div className="relative inline-block text-left">
              <div className="group">
                <button 
                  onClick={() => setActivePage("رجالى")}
                  className={`font-[500] text-[16.5px] cursor-pointer py-0.5 px-2 transition-all ${
                    activePage === "رجالى" ? 'text-[#B4815B]' : 'text-[#3D3D3D] hover:text-[#B4815B] '
                  }`}
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <p>رجالى</p>
                    <ChevronLeft className="mr-3" size={14} />
                  </div>
                </button>

                <div className="absolute z-10 right-[100%] top-0 w-40 mt-0 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">قمصان</a>
                    <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">تيشرتات</a>
                    <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">بناطيل</a>
                    <a href="#" className="block px-4 py-2 text-sm font-medium text-[#B4815B] hover:text-[#fff] hover:bg-[#B4815B]">شورتات</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative">
            <button
              onClick={() => setActivePage('عبايات')}
              className={`font-[500] text-[16.5px] cursor-pointer transition-all
                after:content[*] after:border-b-2  after:w-[90%] after:h-[2px] after:absolute after:right-0 after:bottom-[-10px]
                ${
                activePage === 'عبايات' 
                  ? 'text-[#B4815B]  '
                  : 'text-[#3D3D3D] hover:text-[#B4815B]'
              }`}
            >
              عبايات
            </button>
          </li>
          <li className="relative">
            <button
              onClick={() => setActivePage('ع')}
              className={`font-[500] text-[16.5px] cursor-pointer transition-all
                after:content[*] after:border-b-2  after:w-[90%] after:h-[2px] after:absolute after:right-0 after:bottom-[-10px]
                ${
                activePage === 'عطور' 
                  ? 'text-[#B4815B]  '
                  : 'text-[#3D3D3D] hover:text-[#B4815B]'
              }`}
            >
            عطور
            </button>
          </li>
          <li className="relative">
            <button
              onClick={() => setActivePage("تخفيضات")}
              className={`font-[500] text-[16.5px] cursor-pointer transition-all
                after:content[*] after:border-b-2  after:w-[90%] after:h-[2px] after:absolute after:right-0 after:bottom-[-10px]
                ${
                activePage === 'تخفيضات' 
                  ? 'text-[#B4815B]  '
                  : 'text-[#3D3D3D] hover:text-[#B4815B]'
              }`}
            >
           تخفيضات
            </button>
          </li>
         
          <li className="relative">
            <button
              onClick={() => setActivePage('المدونة')}
              className={`font-[500] text-[16.5px] cursor-pointer transition-all
                after:content[*] after:border-b-2  after:w-[90%] after:h-[2px] after:absolute after:right-0 after:bottom-[-10px]
                ${
                activePage === 'المدونة' 
                  ? 'text-[#B4815B]  '
                  : 'text-[#3D3D3D] hover:text-[#B4815B]'
              }`}
            >
              المدونة
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
