import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../components/Form/Login";
import Register from "../components/Form/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);
