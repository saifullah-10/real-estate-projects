import { useContext, useEffect } from "react";
import { ContextProvide } from "../contextProvider/Context";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
export default function PropertyDetails() {
  const {
    propertyDetails,
    loaderToast,
    setLoaderToast,
    loginToast,
    setLoginToast,
  } = useContext(ContextProvide);

  useEffect(() => {
    if (!loaderToast) {
      toast.success("Successfully Registerd");
      setLoaderToast(true);
    } else if (loginToast) {
      toast.success("Successfully Loged In");
      setLoginToast(false);
    }
  }, [loaderToast, setLoaderToast, loginToast, loginToast]);

  return (
    <div>
      {propertyDetails.name}
      <Link to={"/"}>
        <button className="lg:px-5 lg:py-3 bg-[#e67e22]">
          Go Back To Home
        </button>
      </Link>
      <Toaster />
    </div>
  );
}
