import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const ContextProvide = createContext(null);
export default function Context({ children }) {
  const [propertyDetails, setPropertyDetails] = useState({});
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const values = {
    properties,
    setProperties,
    propertyDetails,
    setPropertyDetails,
  };
  console.log(propertyDetails);
  return (
    <ContextProvide.Provider value={values}>{children}</ContextProvide.Provider>
  );
}

Context.propTypes = {
  children: PropTypes.node,
};
