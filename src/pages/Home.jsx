import { useContext, useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import Property from "../components/Property";
import { ContextProvide } from "../contextProvider/Context";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const { loaderToast, setLoaderToast } = useContext(ContextProvide);

  useEffect(() => {
    if (!loaderToast) {
      console.log("check");
      toast.success(" Successfully Registered");
      setLoaderToast(true);
    }
  }, [loaderToast, setLoaderToast]);
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
      ></ToastContainer>
      <BannerSlider></BannerSlider>
      <Property></Property>
    </div>
  );
}
