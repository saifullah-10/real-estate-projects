// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image1 from "../assets/images/img1.jpeg";
import Image2 from "../assets/images/img2.jpeg";
import "./slider.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function BannerSlider() {
  return (
    <div className=" h-[70vh]  ">
      {" "}
      <Swiper
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute"></div>
            <img src={Image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute"></div>
            <img src={Image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute"></div>
            <img src={Image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute"></div>
            <img src={Image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute"></div>
            <img src={Image1} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
