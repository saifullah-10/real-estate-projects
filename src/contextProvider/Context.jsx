import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../firebase/firebase";

export const ContextProvide = createContext(null);
export default function Context({ children }) {
  const [propertyDetails, setPropertyDetails] = useState({});
  const [properties, setProperties] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
      } else {
        setCurrentUser(currentUser);
      }
    });
    return unSubscribe;
  }, [currentUser]);
  const signOutState = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        console.log("Please Try Again");
      });
  };
  const values = {
    properties,
    setProperties,
    propertyDetails,
    setPropertyDetails,
    currentUser,
    signOutState,
  };

  return (
    <ContextProvide.Provider value={values}>{children}</ContextProvide.Provider>
  );
}

Context.propTypes = {
  children: PropTypes.node,
};
