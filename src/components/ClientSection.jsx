// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Client1 from "../assets/images/client1.jpg";
import "./clientSection.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function ClientSection() {
  return (
    <>
      <div className=" lg:mt-20">
        <h1 className="text-center lg:text-4xl md:text-2xl text-xl text-bold font-bold">
          Our Client Says
        </h1>
        <p className="text-center lg:text-xl lg:mt-2">Feedback From Client</p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" flex flex-col justify-center   bg-black h-full text-white shadow-md rounded-lg overflow-hidden">
            <div className="flex justify-center ">
              <img
                className=" !w-24 rounded-full border-[4px] border-red-500 p-1  outline-[10px]"
                src={Client1}
                alt="Client Image"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">John Doe</h2>
              <p className="p-5">
                Great service! The team was very responsive and professional.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center  bg-black h-full text-white shadow-md rounded-lg overflow-hidden">
            <div className="flex justify-center ">
              <img
                className=" !w-24 rounded-full border-[4px] border-red-500 p-1  outline-[10px]"
                src={Client1}
                alt="Client Image"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Jane Smith</h2>
              <p className="p-5">
                I am extremely satisfied with the quality of work provided. Will
                definitely recommend to others.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center  bg-black h-full text-white shadow-md rounded-lg overflow-hidden">
            <div className="flex justify-center ">
              <img
                className=" !w-24 rounded-full border-[4px] border-red-500 p-1  outline-[10px]"
                src={Client1}
                alt="Client Image"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Michael Johnson</h2>
              <p className="p-5">
                Impressive attention to detail and timely delivery. Could not be
                happier with the results
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center  bg-black h-full text-white shadow-md rounded-lg overflow-hidden">
            <div className="flex justify-center ">
              <img
                className=" !w-24 rounded-full border-[4px] border-red-500 p-1  outline-[10px]"
                src={Client1}
                alt="Client Image"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Sarah Williams</h2>
              <p className="p-5">
                Fantastic communication throughout the project. Exceeded my
                expectations.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center  bg-black h-full text-white shadow-md rounded-lg overflow-hidden">
            <div className="flex justify-center ">
              <img
                className=" !w-24 rounded-full border-[4px] border-red-500 p-1  outline-[10px]"
                src={Client1}
                alt="Client Image"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">David Brown</h2>
              <p className="p-5">
                Professionalism at its finest! I am thoroughly impressed with
                the level of expertise.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center  bg-black h-full text-white shadow-md rounded-lg overflow-hidden">
            <div className="flex justify-center ">
              <img
                className=" !w-24 rounded-full border-[4px] border-red-500 p-1  outline-[10px]"
                src={Client1}
                alt="Client Image"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Emily Davis</h2>
              <p className="p-5">
                Exceptional service from start to finish. Will definitely work
                with them again in the future.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
