import { useContext } from "react";
import { ContextProvide } from "../contextProvider/Context";
import { Link } from "react-router-dom";

export default function PropertyDetails() {
  const { propertyDetails } = useContext(ContextProvide);
  return (
    <div>
      {propertyDetails.name}
      <Link to={"/"}>
        <button className="lg:px-5 lg:py-3 bg-[#e67e22]">
          Go Back To Home
        </button>
      </Link>
    </div>
  );
}
