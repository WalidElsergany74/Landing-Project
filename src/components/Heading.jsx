export default function Heading() {
    return (
      <div className="flex items-center justify-center my-4">
        <div className="flex items-center">
          <div className="h-px flex-grow w-8 sm:w-24 md:w-32 lg:w-40 xl:w-48 bg-gray-300"></div>
          <div className="w-2 h-2 bg-[#B4815B] rounded-full ml-2"></div>
        </div>
        <span className="px-4 text-black text-base sm:text-base md:text-lg font-medium whitespace-nowrap">
          اكتشفوا روعة التسوق المتكاملة
        </span>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-[#B4815B] rounded-full mr-2"></div>
          <div className="h-px flex-grow w-8 sm:w-24 md:w-32 lg:w-40 xl:w-48 bg-gray-300"></div>
        </div>
      </div>
    );
  }
  