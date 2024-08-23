import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// استيراد الموديلات التي تحتاجها
import { Pagination, Navigation , Autoplay } from 'swiper/modules';
import Landingimg from "../images/Landing.png";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft } from 'lucide-react';


export default function Landing() {
  return (
    <div className="bg-black">
      <Swiper
        modules={[Pagination, Navigation , Autoplay ]}
        spaceBetween={200}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{delay :4000,  disableOnInteraction: false,}}
        navigation
        loop={true}
        speed={1000}
        className="pb-16 px-2 md:px-20 lg:px-28"
      >
       <SwiperSlide>
        <div className="flex flex-col md:flex-row justify-between items-center">
  <div className="order-2 md:order-1 md:w-[50%] w-full text-white mt-4 md:mt-0 text-center md:text-right flex flex-col items-center md:items-start">
    <h2 className="text-5xl font-semibold">عطور لا تُنسى</h2>
    <p className="mt-8 text-[#E0E0E0] max-w-[600px]">
      في عالم مليء بالعطور، تميز برائحة لا تُنسى. نقدم لك عطورًا استثنائية تجمع بين الفخامة والأصالة، لتجعل من كل لحظة ذكرى تدوم. عطورنا ليست مجرد رائحة، بل تجربة تحكي قصتك وتترك أثراً لا يُمحى.
    </p>
    <button className="flex items-center text-center space-x-2 mt-4 border-b-2 py-3 px-4 hover:scale-105 transition-transform duration-300">
      Shop now
      <ChevronLeft />
    </button>
  </div>
  <div className="order-1 md:order-2 md:w-[50%] w-full flex justify-center md:justify-end">
    <img
      src={Landingimg}
      alt="Landing"
      className="max-h-[450px] object-contain"
    />
  </div>
</div>

        </SwiperSlide>
       
        <SwiperSlide>
        <div className="flex flex-col md:flex-row justify-between items-center">
  <div className="order-2 md:order-1 md:w-[50%] w-full text-white mt-4 md:mt-0 text-center md:text-right flex flex-col items-center md:items-start">
    <h2 className="text-5xl font-semibold">عطور لا تُنسى</h2>
    <p className="mt-8 text-[#E0E0E0] max-w-[600px]">
      في عالم مليء بالعطور، تميز برائحة لا تُنسى. نقدم لك عطورًا استثنائية تجمع بين الفخامة والأصالة، لتجعل من كل لحظة ذكرى تدوم. عطورنا ليست مجرد رائحة، بل تجربة تحكي قصتك وتترك أثراً لا يُمحى.
    </p>
    <button className="flex items-center text-center space-x-2 mt-4 border-b-2 py-3 px-4 hover:scale-105 transition-transform duration-300">
      Shop now
      <ChevronLeft />
    </button>
  </div>
  <div className="order-1 md:order-2 md:w-[50%] w-full flex justify-center md:justify-end">
    <img
      src={Landingimg}
      alt="Landing"
      className="max-h-[450px] object-contain"
    />
  </div>
</div>

        </SwiperSlide>
       
        <SwiperSlide>
        <div className="flex flex-col md:flex-row justify-between items-center">
  <div className="order-2 md:order-1 md:w-[50%] w-full text-white mt-4 md:mt-0 text-center md:text-right flex flex-col items-center md:items-start">
    <h2 className="text-5xl font-semibold">عطور لا تُنسى</h2>
    <p className="mt-8 text-[#E0E0E0] max-w-[600px]">
      في عالم مليء بالعطور، تميز برائحة لا تُنسى. نقدم لك عطورًا استثنائية تجمع بين الفخامة والأصالة، لتجعل من كل لحظة ذكرى تدوم. عطورنا ليست مجرد رائحة، بل تجربة تحكي قصتك وتترك أثراً لا يُمحى.
    </p>
    <button className="flex items-center text-center space-x-2 mt-4 border-b-2 py-3 px-4 hover:scale-105 transition-transform duration-300">
      Shop now
      <ChevronLeft />
    </button>
  </div>
  <div className="order-1 md:order-2 md:w-[50%] w-full flex justify-center md:justify-end">
    <img
      src={Landingimg}
      alt="Landing"
      className="max-h-[450px] object-contain"
    />
  </div>
</div>

        </SwiperSlide>
       
      
        
      </Swiper>
    </div>
  );
}

