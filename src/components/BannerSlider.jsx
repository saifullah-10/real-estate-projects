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
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute ">
              <div className="border-[3px] border-gray-400 md:w-80 w-64 lg:w-96 mx-auto mt-5 bg-[#00000059]">
                <h1 className="lg:text-4xl text-xl md:text-3xl font-semibold text-[#ABF9F7] mt-5">
                  Crystal Waters Lodge{" "}
                </h1>
                <p className="lg:text-xl font-medium text-[#e8f0a6] mb-3 lg:mb-4">
                  {" "}
                  Property In NewYork
                </p>
              </div>
            </div>
            <img src={Image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute ">
              <div className="border-[3px] border-gray-400 md:w-80 w-64 lg:w-96 mx-auto mt-5 bg-[#00000059]">
                <h1 className="lg:text-4xl text-xl md:text-3xl font-semibold text-[#ABF9F7] mt-5">
                  Whispering Pines Resort{" "}
                </h1>
                <p className="lg:text-xl font-medium text-[#e8f0a6]  mb-3 lg:mb-4">
                  {" "}
                  Property In Alaska
                </p>
              </div>
            </div>
            <img src={Image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute ">
              <div className="border-[3px] border-gray-400 md:w-80 w-64 lg:w-96 mx-auto mt-5 bg-[#00000059]">
                <h1 className="lg:text-4xl text-xl md:text-3xl font-semibold text-[#ABF9F7] mt-5">
                  Resort Nayagra{" "}
                </h1>
                <p className="lg:text-xl font-medium text-[#e8f0a6]  mb-3 lg:mb-4">
                  {" "}
                  Property In Canada
                </p>
              </div>
            </div>
            <img src={Image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute ">
              <div className="border-[3px] border-gray-400 md:w-80 w-64 lg:w-96 mx-auto mt-5 bg-[#00000059]">
                <h1 className="lg:text-4xl text-xl md:text-3xl font-semibold text-[#ABF9F7] mt-5">
                  Sunrise Grand Hotel{" "}
                </h1>
                <p className="lg:text-xl font-medium text-[#e8f0a6]  mb-3 lg:mb-4">
                  {" "}
                  Property In California
                </p>
              </div>
            </div>
            <img src={Image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[#00000059] absolute ">
              <div className="border-[3px] border-gray-400 md:w-80 w-64 lg:w-96 mx-auto mt-5 bg-[#00000059]">
                <h1 className="lg:text-4xl text-xl md:text-3xl font-semibold text-[#ABF9F7] mt-5">
                  Mountain Crest Inn{" "}
                </h1>
                <p className="lg:text-xl font-medium text-[#e8f0a6]  mb-3 lg:mb-4">
                  {" "}
                  Property In Alabama
                </p>
              </div>
            </div>
            <img src={Image1} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
