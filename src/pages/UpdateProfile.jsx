import { useContext, useEffect } from "react";
import { ContextProvide } from "../contextProvider/Context";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";

export default function UpdateProfile() {
  const { currentUser } = useContext(ContextProvide);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();
  const userName = watch("userName", currentUser.displayName);
  const photoURL = watch("photoURL", currentUser.photoURL);
  useEffect(() => {
    reset;
  }, [isSubmitSuccessful, reset]);
  console.log(isSubmitSuccessful);
  return (
    <div data-aos="zoom-in-down">
      <Helmet>
        <title>ARNA Update Profile</title>
      </Helmet>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          const { userName, photoURL } = data;
          updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: photoURL,
          })
            .then(() => {
              toast.success("Updated");
            })
            .catch(() => {
              toast.error("Try Again");
            });
        })}
        className="flex flex-col gap-5 w-[80%] lg:w-1/2 mx-auto  my-10"
      >
        <h1 className="text-center lg:text-4xl text-xl font-bold">
          Update Profile
        </h1>
        <div className="flex lg:text-xl text-lg text-red-600">
          <span>*</span> <p>Make Changes For Enable Update Button</p>
        </div>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          defaultValue={currentUser.displayName}
          {...register("userName")}
          name="userName"
        />
        <TextField
          id="outlined-basic"
          label="PhotoURL"
          variant="outlined"
          defaultValue={currentUser.photoURL}
          {...register("photoURL")}
          name="photoURL"
        />
        <button
          type="submit"
          className={`px-5 py-2 bg-slate-200 hover:bg-green-500 ${
            userName === currentUser.displayName &&
            photoURL === currentUser.photoURL
              ? "opacity-50 cursor-not-allowed hover:bg-gray-400"
              : "bg-green-500"
          }`}
          disabled={
            userName == currentUser.displayName &&
            photoURL == currentUser.photoURL
              ? true
              : false
          }
        >
          Update Profile
        </button>
      </form>
      <Toaster />
    </div>
  );
}
