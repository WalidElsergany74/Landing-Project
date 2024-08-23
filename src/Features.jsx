import Heading from './components/Heading';
import 'aos/dist/aos.css';
import AOS from 'aos';
// Import the images
import abayatImage from './images/Abayat.png';
import careProductsImage from './images/care.png';
import care2 from './images/care2.png';
import care3 from './images/care3.png';

import perfumesImage from './images/per1.png';
import per2 from './images/per2.png';

import clothes1 from './images/clothes1.png';
import clothes2 from './images/clothes2.png';
import { useEffect } from 'react';


export default function Features() {
    useEffect(() => {
        AOS.init({
            duration: 2000, //
        });
    }, []);
    return (
      <div className='flex flex-col items-center justify-center py-10'>
        <Heading />
        <div className='container mx-auto flex flex-col items-center max-w-7xl px-4 md:px-8 lg:px-16'>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-20'  data-aos="fade-up">
          <div className='bg-[#FAF4E6] transform transition-transform duration-300 hover:scale-105 hover:shadow-md  rounded-lg  h-[150px] flex flex-col items-center justify-center text-center'>
              <div className='relative flex justify-center'>
                <img src={clothes1} alt="ملابس" className='w-[90px] h-[93px] left-[-20%] top-[-50%] mb-2 relative z-10' />
                <img src={clothes2} alt="ملابس" className='w-[75px] h-[95px] left-[55%] top-[-50%] mb-2 relative z-9' />
              </div>
              <span className='font-medium text-lg pb-4'>ملابس</span>
            </div>
            <div className='bg-[#FAF4E6] transform transition-transform duration-300 hover:scale-105 hover:shadow-md  rounded-lg h-[150px] flex flex-col items-center justify-center text-center'>
              <div className='relative flex justify-center'>
                <img src={perfumesImage} alt="برفان" className='w-[50px] h-[95px] left-[-20%] top-[-50%] mb-2 relative z-10' />
                <img src={per2} alt="برفان" className='w-[50px] h-[95px] top-[-50%] mb-2 relative z-9' />
              </div>
              <span className='font-medium text-lg pb-4'>عطور</span>
            </div>
            <div className='bg-[#FAF4E6] transform transition-transform duration-300 hover:scale-105 hover:shadow-md  mt-12 lg:mt-0 rounded-lg h-[150px] flex flex-col items-center justify-center text-center'>
              <div className='relative flex justify-center'>
                <img src={care3} alt="منتجات عناية" className='w-30 h-30 left-[-30%] top-[-50%] mb-2 relative z-9' />
                <img src={care2} alt="منتجات عناية" className=' w-[43px] h-[48px] mb-2 relative right-[-5%] z-10 top-[40%]' />
                <img src={careProductsImage} alt="منتجات عناية" className='w-[55px] h-[100px] mb-2 relative z-8 left-[20%] top-[-30%]' />
              </div>
              <span className='block font-medium text-lg pb-4'>منتجات عناية</span>
            </div>
            <div className='bg-[#FAF4E6] transform transition-transform duration-300 hover:scale-105 hover:shadow-md  mt-12 lg:mt-0 rounded-lg h-[150px] flex flex-col items-center justify-center text-center'>
              <img src={abayatImage} alt="عبايات" className='h-[105px] w-[123px] mb-2 relative top-[-30%]' />
              <span className='block font-medium text-lg pb-4'>عبايات</span>
            </div>
  
          
  
           
           
          </div>
          
        </div>
      </div>
    );
  }
  