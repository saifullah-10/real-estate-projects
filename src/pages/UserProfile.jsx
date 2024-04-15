import { useContext } from "react";
import { ContextProvide } from "../contextProvider/Context";
import { CgProfile } from "react-icons/cg";
import DefaultImg from "../assets/images/default.jpg";
import { Helmet } from "react-helmet";

export default function UserProfile() {
  const { currentUser } = useContext(ContextProvide);
  console.log(currentUser);

  return (
    <div data-aos="zoom-in-down">
      <Helmet>
        <title>ARNA Profile</title>
      </Helmet>
      <div className="lg:my-8">
        <h1 className="text-center lg:text-4xl text-xl font-bold">
          Profile Information
        </h1>
      </div>

      <form className="p-5 lg:mb-8 rounded-3xl mx-auto lg:w-1/2 bg-slate-100 border-b-[4px] border-t-[4px] border-t-orange-300 border-b-orange-300 flex flex-col">
        <div className=" w-70  mx-auto">
          <div className="w-40 mx-auto h-40 bg-slate-300 rounded-2xl mb-3 lg:mb-5 ">
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
          <fieldset className="lg:my-2 lg:text-xl text-lg font-medium ">
            <label htmlFor="name">Username: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={currentUser?.displayName}
              readOnly
              className="outline-none bg-transparent"
            />
          </fieldset>
          <fieldset className="lg:text-xl text-lg font-medium">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              value={currentUser?.email ? currentUser?.email : "No Email Found"}
              readOnly
              className="outline-none bg-transparent"
            />
          </fieldset>
        </div>
      </form>
    </div>
  );
}
