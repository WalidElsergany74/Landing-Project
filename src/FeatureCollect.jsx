import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from "lucide-react";
import Col11 from "./images/Col11.png";
import Col12 from "./images/Col12.png";
import Col13 from "./images/Col13.png";
import slider4 from "./images/slider4.png"

import slider6 from "./images/slider6.png"
import slider7 from "./images/slider7.png"

import slider9 from "./images/slider9.png"

import slider11 from "./images/slider11.png"
import { TbStar, TbStarFilled } from "react-icons/tb";
import { useRef, useState, useEffect } from 'react';
import CollectionCategoreis from './components/CollectionCategoreis';
import Important from './components/Important';


export default function FeatureCollect() {
    const swiperRef = useRef(null); // Create a ref for the Swiper instance
    const [activeDirection, setActiveDirection] = useState(null);

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;

        if (!swiperInstance) return;

        // Function to handle slide changes
        const handleSlideChange = () => {
            const isNextSlide = swiperInstance.activeIndex > swiperInstance.previousIndex;
            setActiveDirection(isNextSlide ? 'left' : 'right');
        };

        swiperInstance.on('slideChange', handleSlideChange);

        // Clean up event listener on component unmount
        return () => {
            swiperInstance.off('slideChange', handleSlideChange);
        };
    }, []);

    const handleSetActive = (direction) => {
        if (swiperRef.current) {
            if (direction === "right") {
                swiperRef.current.swiper.slidePrev();
            } else if (direction === "left") {
                swiperRef.current.swiper.slideNext();
            }
        }
    };

    return (
        <div className="py-10">
            <div className="container max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-[18px] font-semibold">🔥 الاكثر مبيعا</h3>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <span
                            className={`w-12 h-12 text-center cursor-pointer transition-all flex justify-center items-center rounded-full ${
                                activeDirection === "right" ? "bg-[#5C3E32] text-white" : "bg-gray-200 hover:bg-[#5C3E32] hover:text-white"
                            }`}
                            onClick={() => handleSetActive("right")}
                        >
                            <ArrowRight className="text-center flex justify-center items-center" />
                        </span>
                        <span
                            className={`w-12 h-12 text-center cursor-pointer transition-all flex justify-center items-center rounded-full ${
                                activeDirection === "left" ? "bg-[#5C3E32] text-white" : "bg-gray-200 hover:bg-[#5C3E32] hover:text-white"
                            }`}
                            onClick={() => handleSetActive("left")}
                        >
                            <ArrowLeft className="text-center flex justify-center items-center" />
                        </span>
                    </div>
                </div>

                {/* Swiper */}
                <div className="mt-8 sm:block ">
                    <Swiper
                        ref={swiperRef} // Attach the ref to Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        freeMode={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        pagination={{ clickable: true, el: null }}  // Hide pagination bullets
                        breakpoints={{
                            300: {
                                slidesPerView: 1.2,
                                spaceBetween: 60,
                            },
                            400: {
                                slidesPerView: 1.2,
                                spaceBetween: 30,
                            },
                            500: {
                                slidesPerView: 1.2,
                                spaceBetween: 25,
                            },
                            600: {
                                slidesPerView: 1.5,
                                spaceBetween: 25,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 10,
                            },
                            1135: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        modules={[FreeMode, Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="relative w-[330px] h-[416px] mx-auto scale cursor-pointer">
                                <img className="rounded-xl xs:w-[300px]  sm:w-full h-full" src={Col11} alt="Col11" />
                                <div className="absolute w-full bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                                    <div className="flex flex-col px-3 pt-3 md:pt-10 lg:pt-2 xl:pt-10 text-white">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold">قميص جاكار مخطط</span>
                                            <div className="flex items-center gap-1">
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStar size={25} className="text-white" />
                                                <TbStar size={25} className="text-white" />
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-2xl font-medium">١٠٣٫٥٠</span>
                                            <span className="mr-2 text-xl text-gray-300">ر.س</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                       

                        <SwiperSlide>
                            <div className="relative w-[330px] h-[416px] mx-auto scale cursor-pointer">
                                <img className="rounded-xl w-full h-full" src={Col12} alt="Col12" />
                                <div className="absolute w-full bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                                    <div className="flex flex-col px-3 pt-3 md:pt-10 lg:pt-2 xl:pt-10 text-white">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold">عطر نسائي</span>
                                            <div className="flex items-center gap-1">
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStar size={25} className="text-white" />
                                                <TbStar size={25} className="text-white" />
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-2xl font-medium">١٠٠٫٥٠
                                            </span>
                                            <span className="mr-2 text-xl text-gray-300">ر.س</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-[330px] h-[416px] mx-auto scale cursor-pointer">
                                <img className="rounded-xl w-full h-full" src={Col13} alt="Col13" />
                                <div className="absolute w-full bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                                    <div className="flex flex-col px-3 pt-3 md:pt-10 lg:pt-2 xl:pt-10 text-white">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold">Retinol 0.2%</span>
                                            <div className="flex items-center gap-1">
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStar size={25} className="text-white" />
                                                <TbStar size={25} className="text-white" />
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-2xl font-medium">٩٣
                                            </span>
                                            <span className="mr-2 text-xl text-gray-300">ر.س</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-[330px] h-[416px] scale cursor-pointer mx-auto">
                                <img className="rounded-xl w-full h-full" src={slider4} alt="Col13" />
                                <div className="absolute w-full bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                                    <div className="flex flex-col px-3 pt-3 md:pt-10 lg:pt-2 xl:pt-10 text-white">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold">سويت شيرت</span>
                                            <div className="flex items-center gap-1">
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStar size={25} className="text-white" />
                                                <TbStar size={25} className="text-white" />
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-2xl font-medium">٢٤٩ 
                                            </span>
                                            <span className="mr-2 text-xl text-gray-300">ر.س</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-[330px] h-[416px] scale cursor-pointer mx-auto">
                                <img className="rounded-xl w-full h-full" src={slider7} alt="Col13" />
                                <div className="absolute w-full bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                                    <div className="flex flex-col px-3 pt-3 md:pt-10 lg:pt-2 xl:pt-10 text-white">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold">تيشيرت - قطن</span>
                                            <div className="flex items-center gap-1">
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStar size={25} className="text-white" />
                                                <TbStar size={25} className="text-white" />
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-2xl font-medium">١٣٩
                                            </span>
                                            <span className="mr-2 text-xl text-gray-300">ر.س</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-[330px] scale cursor-pointer h-[416px] mx-auto">
                                <img className="rounded-xl w-full h-full" src={slider11} alt="Col13" />
                                <div className="absolute w-full bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                                    <div className="flex flex-col px-3 pt-3 md:pt-10 lg:pt-2 xl:pt-10 text-white">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold">قميص كتانى نسائى</span>
                                            <div className="flex items-center gap-1">
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStar size={25} className="text-white" />
                                                <TbStar size={25} className="text-white" />
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-2xl font-medium">٩٩ 
                                            </span>
                                            <span className="mr-2 text-xl text-gray-300">ر.س</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative scale cursor-pointer w-[330px] h-[416px] mx-auto">
                                <img className="rounded-xl w-full h-full" src={slider6} alt="Col13" />
                                <div className="absolute w-full bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                                    <div className="flex flex-col px-3 pt-3 md:pt-10 lg:pt-2 xl:pt-10 text-white">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold">تيشيرت</span>
                                            <div className="flex items-center gap-1">
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStar size={25} className="text-white" />
                                                <TbStar size={25} className="text-white" />
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-2xl font-medium">١٧٩ 
                                            </span>
                                            <span className="mr-2 text-xl text-gray-300">ر.س</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative scale cursor-pointer w-[330px] h-[416px] mx-auto">
                                <img className="rounded-xl w-full h-full" src={slider9} alt="Col13" />
                                <div className="absolute w-full bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                                    <div className="flex flex-col px-3 pt-3 md:pt-10 lg:pt-2 xl:pt-10 text-white">
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold">قطن تيشيرت</span>
                                            <div className="flex items-center gap-1">
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStarFilled size={25} color="#FFD700" />
                                                <TbStar size={25} className="text-white" />
                                                <TbStar size={25} className="text-white" />
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-2xl font-medium">١٤٩
                                            </span>
                                            <span className="mr-2 text-xl text-gray-300">ر.س</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>



                    </Swiper>
                </div>

                <CollectionCategoreis/>
                <Important/>
                
            </div>
        </div>
    );
}
