import Error from "./Error/Error";
import Root from "./layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default routes;
