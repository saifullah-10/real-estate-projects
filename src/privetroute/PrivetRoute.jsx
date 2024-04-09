import { PropTypes } from "prop-types";
import { useContext } from "react";
import { ContextProvide } from "../contextProvider/Context";
import { Navigate, useLocation } from "react-router-dom";
export default function PrivetRoute({ children }) {
  const { currentUser } = useContext(ContextProvide);
  const location = useLocation();
  console.log(currentUser);
  if (currentUser) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
}
PrivetRoute.propTypes = {
  children: PropTypes.node,
};
