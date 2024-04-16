import { Visibility, VisibilityOff } from "@mui/icons-material";
import toast, { Toaster } from "react-hot-toast";

import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextProvide } from "../contextProvider/Context";
import { Helmet } from "react-helmet";

export default function Registration() {
  const { setLoaderToast } = useContext(ContextProvide);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <div>
      <Helmet>
        <title>ARNA Registration</title>
      </Helmet>
      <div>
        <div
          data-aos="zoom-in-down"
          className="form login bg-white max-w-sm w-full p-6 rounded-md mx-auto border-[2px] mb-4"
        >
          <div className="form-content ">
            <header className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Register
            </header>
            <form
              className="space-y-4"
              onSubmit={handleSubmit((data) => {
                const errorValidation = /auth\/email-already-in-use/;
                const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

                const emailRegex =
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                const { email, password, displayName, photoURL } = data;
                if (!passwordRegex.test(password)) {
                  return toast.error(
                    "Password Must At Lest 6 Characters, One Uppercase, One Lowercase"
                  );
                } else if (!emailRegex.test(email)) {
                  return toast.error("Provide A Valid Email");
                }
                createUserWithEmailAndPassword(
                  auth,
                  email,
                  password,
                  displayName
                )
                  .then(async (user) => {
                    console.log(user);
                    setLoaderToast(true);
                    try {
                      await updateProfile(user.user, { displayName, photoURL });
                      setLoaderToast(false);
                    } catch (error) {
                      console.log("error updating ", error);
                    }
                  })
                  .catch((error) => {
                    if (errorValidation.test(error)) {
                      toast.error("Already Registered");
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
                  required
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
      <Toaster />
    </div>
  );
}
