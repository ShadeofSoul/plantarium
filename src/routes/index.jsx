import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";


export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: 'register', element: <Register /> },
    { path: 'login', element: <Login /> },
  
  ]);
}

const Home = Loadable(lazy(() => import("../pages/Home")));
// Auth
