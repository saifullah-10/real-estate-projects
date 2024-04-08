import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { register, handleSubmit } = useForm();
  // const handleSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <div className="max-w-md w-full">
        <div className="form login bg-white max-w-sm w-full p-6 rounded-md">
          <div className="form-content ">
            <header className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Register
            </header>
            <form
              className="space-y-4"
              onSubmit={handleSubmit((data) => {
                const errorValidation = /auth\/email-already-in-use/;
                const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
                const emailRegex =
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                const { email, password, displayName, photoURL } = data;
                if (!urlRegex.test(photoURL)) {
                  return toast.warn("Please Provide A Valid URL");
                } else if (password.length < 6) {
                  return toast.warn("Password Must Be 6 Characters");
                } else if (!emailRegex.test(email)) {
                  return toast.warn("Provide A Valid Email");
                }
                createUserWithEmailAndPassword(
                  auth,
                  email,
                  password,
                  displayName
                )
                  .then(async (user) => {
                    console.log(user);
                    return updateProfile(user.user, { displayName, photoURL })
                      .then(() => {
                        sendEmailVerification(auth.currentUser).then(() => {
                          toast.success("Please Verify Your E-Mail");
                        });
                      })
                      .catch((error) => {
                        console.log("error updating ", error);
                      });
                  })
                  .catch((error) => {
                    if (errorValidation.test(error)) {
                      toast.warn("Already Registered");
                    }
                  });
              })}
            >
              <div>
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  type="text"
                  {...register("displayName")}
                  required
                />
              </div>
              <div>
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="PhotoURL"
                  variant="outlined"
                  type="text"
                  {...register("photoURL")}
                />
              </div>
              <div className="field input-field">
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                  {...register("email")}
                />
              </div>

              <div className="field input-field">
                {" "}
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    required
                    {...register("password")}
                  />
                </FormControl>
              </div>

              {/* <div className="form-link text-center">
                <a href="#" className="forgot-pass text-blue-600">
                  Forgot password?
                </a>
              </div> */}

              <div className="field button-field">
                <button
                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-blue-700"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>

            <div className="form-link text-center mt-4">
              <span className="text-gray-800">
                Already have an account?{" "}
                <Link to={"/login"}>
                  {" "}
                  <a href="#" className="link text-blue-600">
                    Login
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
      />
    </div>
  );
}
