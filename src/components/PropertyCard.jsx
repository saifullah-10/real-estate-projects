import { PropTypes } from "prop-types";
import { useContext } from "react";
import { ContextProvide } from "../contextProvider/Context";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
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
    <div className="border-2 lg:p-5 p-2 rounded-3xl">
      <div className="h-[250px]">
        <img
          className="w-full h-full rounded-3xl animated-border"
          src={image}
          alt=""
        />
      </div>
      <div>
        <p>Status:{status}</p>
      </div>
      <h2>{name}</h2>
      <div>
        <img src="" alt="" />
        <p>
          {address},{city} ,{state},{zipCode},{country}
        </p>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <p>{area}</p>
        </div>
        <div>
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
