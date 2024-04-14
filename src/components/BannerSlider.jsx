// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image1 from "../assets/images/img1.jpeg";
import Image2 from "../assets/images/img2.jpeg";
import "./slider.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function BannerSlider() {
  AOS.init({});
  return (
    <div className=" lg:h-[70vh] ">
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
        className="mySwiper lg:rounded-2xl rounded-xl"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute">
              <h1
                className="text-4xl text-white"
                data-aos-duration="1000"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                animation
              </h1>
              Property In NewYork
            </div>
            <img src={Image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute">
              <h1
                className="text-4xl text-white"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="2000"
              >
                animation
              </h1>
            </div>
            <img src={Image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute">
              <h1
                className="text-4xl text-white"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-delay="4000"
              >
                animation
              </h1>
            </div>
            <img src={Image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute">
              <h1
                className="text-4xl text-white"
                data-aos="fade-right"
                data-aos-duration="4000"
                data-aos-delay="6000"
              >
                animation
              </h1>
            </div>
            <img src={Image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute">
              <h1
                className="text-4xl text-white"
                data-aos="fade-right"
                data-aos-duration="10000"
                data-aos-delay="8000"
              >
                animation
              </h1>
            </div>
            <img src={Image1} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
