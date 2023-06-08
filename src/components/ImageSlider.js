import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import pic1 from '../assets/hecPics/1.jpg'
import pic2 from '../assets/hecPics/2.jpg'
import pic3 from '../assets/hecPics/3.jpg'
import pic4 from '../assets/hecPics/5.jpg'
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const ImageSlider = () => {
  return (
    <>
    <div className='flex justify-center items-center bg-[#f8eded]  pt- pb-6'>
    <div className=' lg:w-[100%] md:w-[100%] xl:w-[100%] w-[100%] m-auto h-fit'>
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic1} className='w-[100%] '/></SwiperSlide>
        <SwiperSlide><img src={pic2}/></SwiperSlide>
        <SwiperSlide><img src={pic3}/></SwiperSlide>
        <SwiperSlide><img src={pic4}/></SwiperSlide>

        
      </Swiper>
      </div>
      </div>
    </>
  )
}

export default ImageSlider