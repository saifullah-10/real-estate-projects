import TextField from "@mui/material/TextField";
import { sendPasswordResetEmail } from "firebase/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase/firebase";
import toast, { Toaster } from "react-hot-toast";

export default function ResetPassword() {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <div>
        <h1 className="text-center lg:text-4xl text-xl font-bold">
          Reset Password
        </h1>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          const { resetEmail } = data;
          sendPasswordResetEmail(auth, resetEmail)
            .then(() => {
              toast.success(
                " If have any account by this email. Check Your Email"
              );
            })
            .catch(() => {
              toast.error("Try Again");
            });
        })}
        className="w-[90%] lg:my-8 my-4 lg:w-1/2 border-b-[2px] border-b-orange-300 border-t-[2px] border-t-orange-300 rounded-3xl lg:p-8 p-3 mx-auto flex items-start gap-5 flex-col"
      >
        <div>
          <h2 className="text-2xl font-medium">Enter Your Email :</h2>
        </div>
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          className="lg:w-1/2 w-[80%]"
          {...register("resetEmail")}
          required
        />
        <button
          className="lg:py-2 lg:px-3  lg:text-lg text-white font-semibold rounded-xl py-1 px-3 bg-green-500"
          type="submit"
        >
          Send Reset Email
        </button>
      </form>
      <Toaster></Toaster>
    </div>
  );
}
