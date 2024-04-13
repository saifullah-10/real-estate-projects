import { Visibility, VisibilityOff } from "@mui/icons-material";

import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { BsGithub } from "react-icons/bs";
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
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { ContextProvide } from "../contextProvider/Context";

export default function Login() {
  const { setLoginToast } = useContext(ContextProvide);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((user) => {
        console.log(user);
        navigate(location?.state ? location.state : "/");
        setLoginToast(true);
      })
      .catch((error) => {
        if (error) {
          toast.error("Somthing Went Wrong");
        }
      });
  };

  const githubAuth = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then((user) => {
        console.log(user);
        navigate(location?.state ? location.state : "/");
        setLoginToast(true);
      })
      .catch((error) => {
        console.error(error);
      });
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
                      .then((user) => {
                        console.log(user);
                        navigate(location?.state ? location.state : "/");
                        setLoginToast(true);
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
                <div
                  onClick={handleGoogleLogin}
                  className=" cursor-pointer w-full border border-gray-300 text-gray-700 font-semibold py-2 rounded-md flex items-center justify-center"
                >
                  <i className="mr-3">
                    <FaGoogle />
                  </i>
                  <span>Login with Google</span>
                </div>
                {/* <div
                  onClick={handleTwitter}
                  className=" cursor-pointer w-full bg-black text-white font-semibold py-2 rounded-md flex items-center justify-center"
                >
                  <i>
                    <BsTwitterX />
                  </i>
                  <span className="ml-2">Login with Twitter</span>
                </div> */}
                <div
                  onClick={githubAuth}
                  className=" cursor-pointer w-full bg-black text-white font-semibold py-2 rounded-md flex items-center justify-center"
                >
                  <i>
                    <BsGithub />
                  </i>
                  <span className="ml-2">Login with GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
}
