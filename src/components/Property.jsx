import "./property.css";
import { useContext } from "react";
import { ContextProvide } from "../contextProvider/Context";
import PropertyCard from "./PropertyCard";
export default function Property() {
  const { properties } = useContext(ContextProvide);

  return (
    <section>
      <div className="w-full mt-20 my-40">
        <div>
          <h1>Our Properties</h1>
          <p>Very strategic location, Suitable for business </p>
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
