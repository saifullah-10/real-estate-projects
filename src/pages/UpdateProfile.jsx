import { useContext, useEffect } from "react";
import { ContextProvide } from "../contextProvider/Context";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase";

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
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        const { userName, photoURL } = data;
        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: photoURL,
        })
          .then(() => {
            alert("updated");
          })
          .catch((error) => {
            console.error(error);
          });
      })}
      className="flex flex-col gap-5 w-1/2 mx-auto  my-10"
    >
      <p>Make Changes For Enable Update Button</p>
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
        className="px-5 py-2 bg-slate-200"
        disabled={
          userName == currentUser.displayName &&
          photoURL == currentUser.photoURL
            ? true
            : false
        }
      >
        Update Profile
      </button>
      {/* {isSubmitSuccessful && reset()} */}
    </form>
  );
}
