import { useContext } from "react";
import { ContextProvide } from "../contextProvider/Context";
import { CgProfile } from "react-icons/cg";
import DefaultImg from "../assets/images/default.jpg";

export default function UserProfile() {
  const { currentUser } = useContext(ContextProvide);
  console.log(currentUser);

  return (
    <div>
      <div>
        <h1>Profile Information</h1>
      </div>

      <form className="p-5 bg-slate-100 border-2 border-t-orange-300 flex flex-col">
        <div className="w-40 h-40 bg-slate-300 rounded-2xl">
          {currentUser.photoURL ? (
            <img
              className="w-40 h-40 rounded-2xl"
              src={currentUser.photoURL}
              alt="Profile"
              onError={(e) => {
                e.target.src = DefaultImg;
              }}
            />
          ) : (
            <CgProfile className="text-[10rem] rounded-2xl"></CgProfile>
          )}
        </div>
        <fieldset>
          <label htmlFor="name">Username: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={currentUser?.displayName}
            readOnly
            className="outline-none"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            value={currentUser?.email ? currentUser?.email : "No Email Found"}
            readOnly
            className="outline-none"
          />
        </fieldset>
      </form>
    </div>
  );
}
