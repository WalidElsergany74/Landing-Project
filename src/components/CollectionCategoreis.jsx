import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'aos/dist/aos.css';
import { FreeMode, Autoplay } from 'swiper/modules';
import cat11 from "../images/cat11.png"
import cat12 from "../images/cat12.png"
import cat13 from "../images/cat13.png"
import cat14 from "../images/cat14.png"
import cat15 from "../images/cat15.png"
import cat16 from "../images/cat16.png"
import cat17 from "../images/cat17.png"
import cat18 from "../images/cat18.png"



export default function CollectionCategoreis() {
  const categories = [
    { src: cat11, title: "ملابس رجالية", count: 100 },
    { src: cat12, title: "شنط", count: 120 },
    { src: cat13, title: "تيشرتات", count: 150 },
    { src: cat14, title: "عبايات", count: 130 },
    { src: cat15, title: "أحذية", count: 110 },
    { src: cat16, title: "ملابس رياضية", count: 140 },
    { src: cat17, title: "ساعات", count: 110 },
    { src: cat18, title: "عطور", count: 170 },
  ];


  return (
    <div className="py-10">
      <div className=" flex justify-center  items-center w-full lg:block">
        {/* Swiper for small screens */}
        <div className="block md:hidden w-full">
          <Swiper
            slidesPerView={1.4}
            spaceBetween={15}
            freeMode={true}
            autoplay={{ delay:2500, disableOnInteraction: false }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {categories.map((cat, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-sm rounded-2xl shadow-md bg-[#F5F5F5] w-full" >
                  <div className="box flex items-center">
                    <img className="p-3" src={cat.src} alt={cat.title} />
                    <div className="flex flex-col mr-3">
                      <span className="mb-2 text-xl font-semibold">{cat.title}</span>
                      <span className="text-md font-medium">{cat.count} منتج</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid layout for medium and large screens */}
        <div className="hidden md:grid md:grid-cols-12  md:gap-10" >
          {categories.map((cat, index) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4 max-w-xs rounded-2xl shadow-md bg-[#F5F5F5]" key={index}>
              <div className="box flex items-center">
                <img className="p-3" src={cat.src} alt={cat.title} />
                <div className="flex flex-col mr-3">
                  <span className="mb-2 text-xl font-semibold">{cat.title}</span>
                  <span className="text-md font-medium">{cat.count} منتج</span>
                </div>
              </div>
            </div>
          ))}
        </div>

          
      </div>
    </div>
  );
}
