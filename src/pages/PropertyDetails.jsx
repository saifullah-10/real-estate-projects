import { useContext, useEffect, useState } from "react";
import { ContextProvide } from "../contextProvider/Context";
import { FaLocationDot } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { FaPhoneAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Rating, Stack } from "@mui/material";
export default function PropertyDetails() {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState({});
  const { loaderToast, setLoaderToast, loginToast, setLoginToast } =
    useContext(ContextProvide);

  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data) => {
        const property = data.find((item) => item.id == id);
        setPropertyData(property);
      })
      .catch((error) => {
        console.error(error);
      });
    if (!loaderToast) {
      toast.success("Successfully Registerd");
      setLoaderToast(true);
    } else if (loginToast) {
      toast.success("Successfully Loged In");
      setLoginToast(false);
    }
  }, [loaderToast, setLoaderToast, loginToast, loginToast, id]);
  const { location } = propertyData;
  const { contact } = propertyData;
  return (
    <div className="w-[95%] lg:w-[70%] mx-auto">
      <div>
        <div className="lg:mb-3 ">
          <h1 className="lg:text-4xl md:text-2xl text-xl font-bold leading-10">
            {propertyData?.name}
          </h1>
        </div>
        <div className="flex lg:gap-3 gap-1 items-center text-[#757575]">
          <div>
            <FaLocationDot className="lg:text-2xl text-xl" />
          </div>
          <div className="lg:text-lg font-medium">
            {`${location?.address}, ${location?.city}, ${location?.zipCode}, ${location?.state}, ${location?.country}`}
          </div>
        </div>
        <div className="lg:my-5 my-3 relative">
          <div className="absolute top-3 left-3 bg-green-500 py-1 px-3 lg:text-2xl text-xl text-[#ffffff] font-semibold rounded-full">
            {propertyData &&
              propertyData.status &&
              propertyData.status.toUpperCase()}
          </div>
          <div className="absolute right-4 top-3 bg-[#0000009b] rounded-2xl p-2">
            <p className="text-center text-xl text-white">Rating</p>
            {propertyData && propertyData.rating && (
              <Stack>
                <Rating
                  name="half-rating"
                  defaultValue={propertyData.rating}
                  precision={0.1}
                  readOnly
                />
              </Stack>
            )}
          </div>
          <img src={propertyData.image} alt="" className="w-full rounded-2xl" />
        </div>

        <div className=" mb-4 border-[2px] flex flex-col gap-3 border-gray-500 lg:p-6 p-3 rounded-2xl ">
          <h3 className="  text-center lg:text-3xl text-2xl font-bold">
            About Property
          </h3>
          <div className="flex gap-4">
            <h2 className=" flex gap-2 items-center lg:text-2xl text-xl text-green-600 font-bold  ">
              <span>
                <MdPriceChange className="lg:text-4xl text-xl" />
              </span>{" "}
              PRICE: USD {propertyData?.price?.amount}
            </h2>
          </div>
          <div>
            <h2 className=" flex items-center gap-3 lg:text-xl text-lg font-medium text-[#4B4A4A] ">
              <span>
                <FaChartArea />
              </span>{" "}
              AREA : {propertyData?.area}
            </h2>
          </div>
          <div className="flex lg:text-xl items-center gap-3 text-lg">
            <span>
              <MdCategory />
            </span>
            <p className=" font-medium">Category: {propertyData.type}</p>
          </div>
          <div className="lg:my-5">
            <h2 className="text-lg">
              <span className="lg:text-xl font-medium text-[orange]">
                Description:
              </span>{" "}
              {propertyData?.description}
            </h2>
          </div>
          <div className="border-t-[2px] border-gray-500 lg:py-4 py-2">
            <div className="flex items-center gap-2 text-xl lg:text-2xl mb-3">
              <span>
                <FaPhoneAlt />
              </span>
              <h2 className="text-[#4B4A4A]"> Phone: {contact?.phone}</h2>
            </div>
            <div className="flex items-center gap-2 text-xl lg:text-2xl">
              <span>
                <MdEmail />
              </span>
              <h2 className="text-[#4B4A4A]">Email: {contact?.email}</h2>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}
