import { PropTypes } from "prop-types";
import { useContext } from "react";
import { ContextProvide } from "../contextProvider/Context";
import { IoIosPricetags } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbChartAreaLine } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";

export default function PropertyCard({ property }) {
  const {
    name,
    image,
    location: { city, state, country, address, zipCode },
    area,
    price: { currency, amount },
    status,
  } = property;
  const { setPropertyDetails } = useContext(ContextProvide);
  const setDtata = () => {
    setPropertyDetails(property);
  };
  return (
    <div
      className="border-2  lg:p-5 p-3 rounded-3xl overflow-hidden"
      data-aos="zoom-in"
    >
      <div className="h-[250px] border-black border-b-[2px] border-dashed pb-3">
        <img
          className="w-full h-full rounded-3xl animated-border"
          src={image}
          alt=""
        />
      </div>
      <div className="lg:mt-3">
        <p className="text-lg font-medium">
          Status: {status && status.toUpperCase()}
        </p>
      </div>
      <h2 className="text-xl font-bold ">{name}</h2>
      <div className="flex gap-2 lg:my-2 ">
        <IoLocationOutline className="text-2xl" />
        <p>
          {address},{city} ,{state},{zipCode},{country}
        </p>
      </div>
      <div>
        <div className="flex gap-2">
          <TbChartAreaLine className="text-2xl" />
          <p>{area}</p>
        </div>
        <div className="flex gap-2 my-2">
          <IoIosPricetags className="text-2xl" />
          <p>
            {currency} {amount}
          </p>
        </div>
        <Link to={`/details/${property.id}`}>
          <button
            onClick={setDtata}
            className="lg:py-3 lg:px-5 py-2 px-3 hover:bg-[#976336] bg-[#e67e22] rounded-xl text-white font-medium"
          >
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
}
PropertyCard.propTypes = {
  property: PropTypes.obj,
};
