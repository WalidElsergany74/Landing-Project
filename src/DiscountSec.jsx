import Line from "./components/Line";
import tiger from "./images/image35.png";
import Logo2 from "./images/Logo2.png";

export default function DiscountSec() {
  return (
    <>
      <div className="lg:py-16 min-h-screen pt-12 w-full flex flex-wrap flex-col-reverse lg:flex-row justify-between items-stretch">
        {/* Right Section */}
        <div className="w-full lg:w-[50%] min-h-[50vh] flex-1 bg-[#FAF4E6] flex flex-col justify-center items-center text-center p-8">
          <div className="flex flex-col justify-center items-center lg:items-start lg:text-right">
            <h3 className="text-5xl md:text-7xl font-bold text-[#B4815B] mb-4">
              وفر حتى 50%
            </h3>
            <p className="leading-7 text-lg font-medium mb-8 text-[#7C7C7C]">
              احصلوا على أفضل العروض والتخفيضات على منتجاتنا المختارة. تسوقوا الآن واستمتعوا بجودة عالية بأسعار منخفضة!
            </p>
            <button className="bg-[#FAF4E6] border border-[#B4815B] text-[#B4815B] text-lg font-medium hover:bg-[#5C3E32] hover:text-white hover:border-[#5C3E32] transition-colors duration-300 py-3 px-7 rounded-md">
              تسوق الآن
            </button>
          </div>
        </div>

        {/* Left Section */}
        <div className="w-full lg:w-[50%] min-h-[50vh] relative flex justify-center items-center bg-[#B4815B]">
          <img
            src={Logo2}
            alt="Logo"
            className="absolute z-10 w-[160px] md:w-[340px]"
          />
          <img
            src={tiger}
            alt="Tiger"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Line Component */}
        <div className="w-full hidden lg:block">
          <Line />
        </div>
      </div>

      {/* Line Component for smaller screens */}
      <div className="w-full lg:hidden block">
        <Line />
      </div>
    </>
  );
}
