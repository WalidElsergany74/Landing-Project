import { ChevronsLeft, ChevronsRight } from "lucide-react";
import substract from "../images/subtract.png";
import substractSmall from "../images/Subtractsmall.png";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Important() {
  return (
    <div className="py-20 px-0 sm:px-10 md:px-12 sm:py-16 md:py-20">
      <div className="relative">
      
          {/* Default image for larger screens */}
          <img src={substract} alt="Background" className="w-full hidden md:block h-auto object-cover" />
          <img src={substractSmall} alt="Background" className="w-full block md:hidden h-auto object-cover" />

        {/* Container for arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          {/* Arrows for larger screens */}
          <div className="hidden md:flex items-center absolute top-[-15px] right-[-30px]">
            <a className="w-12 h-12 ml-1 bg-gray-200 hover:bg-[#5C3E32] text-[#5C3E32] hover:text-white text-center cursor-pointer transition-all flex justify-center items-center rounded-full">
              <ChevronsRight />
            </a>
            <a className="w-12 h-12 ml-1 bg-gray-200 hover:bg-[#5C3E32] text-[#5C3E32] hover:text-white text-center cursor-pointer transition-all flex justify-center items-center rounded-full">
              <ChevronsLeft />
            </a>
          </div>
          {/* Arrows for smaller screens */}
          <div className="md:hidden flex justify-center items-center absolute bottom-[-15px] left-[-15px] md:bottom-[15px] md:left-[30px]  ">
            <a className="w-12 h-12 md:ml-2 ml-1 bg-gray-200 hover:bg-[#5C3E32] text-[#5C3E32] hover:text-white text-center cursor-pointer transition-all flex justify-center items-center rounded-full">
            <ChevronsRight />
            </a>
            <a className="w-12 h-12 md:mr-2 mr-1 bg-gray-200 hover:bg-[#5C3E32] text-[#5C3E32] hover:text-white text-center cursor-pointer transition-all flex justify-center items-center rounded-full ml-2">
            <ChevronsLeft />
            </a>
          </div>
        </div>

        {/* Button Large */}
        <button className="md:flex hidden flex-col justify-center items-center absolute bottom-[4%] left-[1%]  bg-gradient-to-r from-[#b4825b83] via-[#0000004f] to-[#ffffff91]  text-[#5C3E32]  backdrop-blur-md hover:scale-105 transition-transform duration-500 rounded-2xl py-6 px-4">
          <HiOutlineShoppingBag size={30} color="white" />
          <span className="text-lg font-medium text-white">تسوق الان</span>
        </button>
        {/* Button  small*/}
        <button className="md:hidden flex flex-col justify-center items-center absolute top-[-5%] right-[0%] bg-gradient-to-r from-[#b4825b83] via-[#ffffff73] to-[#0000003b] text-[#5C3E32] backdrop-blur-sm hover:scale-105 transition-transform duration-500 rounded-2xl py-4 px-4">
          <HiOutlineShoppingBag size={30} color="white" />
          <span className="text-lg font-medium text-white">تسوق الان</span>
        </button>
      </div>
    </div>
  );
}
