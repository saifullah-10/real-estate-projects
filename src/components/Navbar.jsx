import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/images/mainLogo.png";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import "./navbar.css";
export default function Navbar() {
  const [show, setShow] = useState("-translate-x-[1000px]");
  const handleMenu = () => {
    console.log(" hello");
    setShow(
      show === "-translate-x-[1000px]"
        ? "translate-x-0"
        : "-translate-x-[1000px]"
    );
  };
  const closeHandleMenu = () => {
    setShow(
      show === "translate-x-0" ? "-translate-x-[1000px]" : "translate-x-0"
    );
  };
  return (
    <nav className="flex justify-between items-center  relative border-b-8 border-[tomato] rounded-bl-2xl rounded-br-2xl mb-4 py-4  ">
      <div
        className="lg:hidden cursor-pointer relative pl-4 "
        onClick={handleMenu}
      >
        <AiOutlineMenu className="text-4xl"></AiOutlineMenu>
      </div>
      <div
        className={`absolute py-6 w-full ${show} top-0   bg-slate-500 z-30 active lg:hidden  transition-transform duration-300`}
      >
        <div onClick={closeHandleMenu} className=" flex justify-end pr-5">
          <RxCross2 className="text-4xl cursor-pointer " />
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col items-center gap-6 ">
            <li className=" relative">Home</li>
            <li className=" relative">About</li>
            <li className=" relative">contact</li>
          </ul>
        </div>
      </div>
      <div className="w-[200px] lg:pl-5">
        <img className="w-full h-full" src={Logo} alt="" />
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center gap-6 ">
          <li className=" relative">Home</li>
          <li className=" relative">About</li>
          <li className=" relative">contact</li>
          <li className=" relative">Blogs</li>
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-4 gap-2 lg:mr-10 pr-4 lg:pr-0">
        <button className="py-2 px-4 hover:bg-[#4d4dd4] bg-[#87CEEB] rounded-xl text-lg font-medium text-[#fff]">
          Sign In
        </button>
        <button className="py-2 px-4 bg-[#87CEEB] hover:bg-[#4d4dd4] rounded-xl text-lg font-medium text-[#ffffff]">
          Register
        </button>
      </div>
    </nav>
  );
}
