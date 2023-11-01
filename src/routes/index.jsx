import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Router() {
  return useRoutes([
    {
      path: "/", // Корень
      element: <Home />,
      children: [
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        {
          path: "profile",
          children: [
            {
              path: "cart",
            },
          ],
        },
      ],
    },
  ]);
}
