import { lazy } from "react";
import { useRoutes } from "react-router-dom";
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "register", element: <Register /> },
    { path: "login", element: <Login /> },
  ]);
}

const Home = Loadable(lazy(() => import("../pages/Home")));
// Auth
const Register = Loadable(lazy(() => import("../pages/Register")));
const Login = Loadable(lazy(() => import("../pages/Login")));
