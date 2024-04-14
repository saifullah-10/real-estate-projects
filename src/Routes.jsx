import Error from "./Error/Error";
import Root from "./layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Test from "./components/Test";
import PrivetRoute from "./privetroute/PrivetRoute";
import ProtectedLogin from "./privetroute/ProtectedLogin";

import UpdateProfile from "./pages/UpdateProfile";
import UserProfile from "./pages/UserProfile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/about",
        element: <Test></Test>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <PropertyDetails></PropertyDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            {" "}
            <UserProfile></UserProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "/updateprofile",
        element: (
          <PrivetRoute>
            {" "}
            <UpdateProfile></UpdateProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedLogin>
            <Login></Login>{" "}
          </ProtectedLogin>
        ),
      },
      {
        path: "/registration",
        element: (
          <ProtectedLogin>
            <Registration></Registration>
          </ProtectedLogin>
        ),
      },
    ],
  },
]);

export default routes;
