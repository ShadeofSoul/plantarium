import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "auth/register", element: <Register /> },
    { path: "auth/login", element: <Login /> },
    {
      path: "profile",
      children: [
        {
          path: "cart"
        }
      ]
    },
  ]);
}
