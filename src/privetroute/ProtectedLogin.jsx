import { ContextProvide } from "../contextProvider/Context";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useContext } from "react";

export default function ProtectedLogin({ children }) {
  const { currentUser } = useContext(ContextProvide);
  if (currentUser) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
}
ProtectedLogin.propTypes = {
  children: PropTypes.node,
};
