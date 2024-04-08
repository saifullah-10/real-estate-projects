import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FaFacebookF } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import auth from "../firebase/firebase";
import { FaGoogle } from "react-icons/fa";
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
import { signInWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div
        className="hero "
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content !w-[50%]">
          <div className="max-w-md w-full">
            <div className="form login bg-white max-w-sm w-full p-6 rounded-md">
              <div className="form-content ">
                <header className="text-2xl font-semibold text-gray-800 mb-4">
                  Login
                </header>
                <form
                  className="space-y-4"
                  onSubmit={handleSubmit((data) => {
                    const errorValidation = /auth\/invalid-credential/;
                    const { email, password } = data;
                    signInWithEmailAndPassword(auth, email, password)
                      .then(() => {
                        toast.success("sign In");
                      })
                      .catch((error) =>
                        errorValidation.test(error)
                          ? toast.error("Wrong Password Or Email")
                          : error.message
                      );
                  })}
                >
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                        required
                        {...register("password")}
                      />
                    </FormControl>
                  </div>

                  <div className="form-link text-center">
                    <a href="#" className="forgot-pass text-blue-600">
                      Forgot password?
                    </a>
                  </div>

                  <div className="field button-field">
                    <button
                      className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-blue-700"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>

                <div className="form-link text-center mt-4">
                  <span className="text-gray-800">
                    Dont have an account?{" "}
                    <Link to={"/registration"}>
                      {" "}
                      <a href="#" className="link text-blue-600">
                        Register
                      </a>
                    </Link>
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-center">Or</p>
              </div>

              <div className="media-options flex flex-col space-y-2 mt-3">
                <a
                  href="#"
                  className="facebook w-full bg-blue-800 text-white font-semibold py-2 rounded-md flex items-center justify-center"
                >
                  <i>
                    <FaFacebookF />
                  </i>
                  <span className="ml-2">Login with Facebook</span>
                </a>
                <a
                  href="#"
                  className="google w-full border border-gray-300 text-gray-700 font-semibold py-2 rounded-md flex items-center justify-center"
                >
                  <i className="mr-3">
                    <FaGoogle />
                  </i>
                  <span>Login with Google</span>
                </a>
              </div>
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
