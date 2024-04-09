import Error from "./Error/Error";
import Root from "./layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Test from "./components/Test";
import PrivetRoute from "./privetroute/PrivetRoute";

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
        path: "/details",
        element: (
          <PrivetRoute>
            <PropertyDetails></PropertyDetails>
          </PrivetRoute>
        ),
      },
      { path: "/login", element: <Login></Login> },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default routes;
