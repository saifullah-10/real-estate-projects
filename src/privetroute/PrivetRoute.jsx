import { PropTypes } from "prop-types";
import { useContext } from "react";
import { ContextProvide } from "../contextProvider/Context";
import { Navigate } from "react-router-dom";
export default function PrivetRoute({ children }) {
  const { currentUser } = useContext(ContextProvide);
  if (currentUser) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
}
PrivetRoute.propTypes = {
  children: PropTypes.node,
};
