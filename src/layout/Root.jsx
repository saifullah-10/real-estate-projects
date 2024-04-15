import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { ContextProvide } from "../contextProvider/Context";
export default function Root() {
  const { loader } = useContext(ContextProvide);

  return (
    <div className="font-Poppins max-w-[1440px] lg:w-full w-[98%]  mx-auto relative">
      {loader ? (
        <>
          {" "}
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
          />
        </>
      ) : (
        <div className="flex justify-center items-center h-[100vh]">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </div>
  );
}
