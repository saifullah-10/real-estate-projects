import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/images/mainLogo.png";

import "react-toastify/dist/ReactToastify.css";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import "./navbar.css";

import { Link, NavLink } from "react-router-dom";
import { ContextProvide } from "../contextProvider/Context";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

export default function Navbar() {
  const { currentUser, signOutState } = useContext(ContextProvide);
  const [show, setShow] = useState("-translate-x-[1000px]");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
  const handleSignOut = () => {
    signOutState();
  };
  // const handleUpdateProfile =()=>{

  // }
  return (
    <nav className=" sticky top-0   border-b-8 border-[tomato] rounded-bl-2xl rounded-br-2xl mb-4 py-4 z-10 bg-white ">
      <div className="flex relative justify-between items-center">
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
            <NavLink to={"/"}>
              <li className=" relative cursor-pointer">Home</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li className=" relative cursor-pointer">About</li>
            </NavLink>
            <NavLink>
              {" "}
              <li className=" relative cursor-pointer">contact</li>
            </NavLink>
            <NavLink>
              {" "}
              <li className=" relative cursor-pointer">Blogs</li>
            </NavLink>
          </ul>
        </div>
        {!currentUser ? (
          <div className="lg:flex flex-col lg:flex-row lg:gap-4 gap-2 lg:mr-10 pr-4 lg:pr-0 ">
            <Link to={"/login"}>
              {" "}
              <button className="py-2 px-4 hover:bg-[#4d4dd4] bg-[#87CEEB] rounded-xl text-lg font-medium text-[#fff]">
                Sign In
              </button>
            </Link>
          </div>
        ) : (
          <div className="lg:mr-10 pr-4 lg:pr-0 cursor-pointer">
            <div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip
                  title={
                    currentUser.displayName ? currentUser.displayName : "User"
                  }
                >
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    {currentUser.photoURL ? (
                      <Avatar
                        sx={{ width: 40, height: 40 }}
                        src={currentUser.photoURL} // Assuming currentUser.photoURL is the image URL
                        alt={currentUser?.displayName?.toUpperCase()}
                      />
                    ) : (
                      <Avatar
                        sx={{ width: 40, height: 40 }}
                        src="null" // Assuming currentUser.photoURL is the image URL
                        alt={currentUser?.displayName?.toUpperCase()}
                      />
                    )}
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link to={"/profile"}>
                  {" "}
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                  </MenuItem>
                </Link>
                <Link to={"/updateprofile"}>
                  {" "}
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Update Profile
                  </MenuItem>
                </Link>
                <Divider />

                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleSignOut}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
