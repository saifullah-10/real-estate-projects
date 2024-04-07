import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <div className="font-Poppins">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
