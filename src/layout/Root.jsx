import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <div className="font-Poppins max-w-[1440px] lg:w-[80%] w-[98%] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
