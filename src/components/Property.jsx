import "./property.css";
import { useContext } from "react";
import { ContextProvide } from "../contextProvider/Context";
import PropertyCard from "./PropertyCard";
export default function Property() {
  const { properties } = useContext(ContextProvide);

  return (
    <section>
      <div className="w-full my-10 lg:mt-20 ">
        <div className="lg:my-8 my-4">
          <h1 className="text-center mb-3 lg:text-4xl text-xl md:text-2xl font-bold">
            OUR PROPERTIES
          </h1>
          <p className="text-center text-lg">
            Very strategic location, Suitable for business{" "}
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10">
          {properties?.map((property) => (
            <PropertyCard key={property.id} property={property}></PropertyCard>
          ))}
        </div>
      </div>
    </section>
  );
}
