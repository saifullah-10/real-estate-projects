import { useContext, useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import Property from "../components/Property";
import { ContextProvide } from "../contextProvider/Context";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const { loaderToast, setLoaderToast, loginToast, setLoginToast } =
    useContext(ContextProvide);

  useEffect(() => {
    if (loginToast) {
      toast.success("Successfully Loged In");

      return setLoginToast(false);
    }
    if (!loaderToast) {
      toast.success("Successfully Registerd");
      setLoaderToast(true);
    }
  }, [loaderToast, setLoaderToast, loginToast, setLoginToast]);

  return (
    <div>
      <BannerSlider></BannerSlider>
      <Property></Property>
      <Toaster />
    </div>
  );
}
