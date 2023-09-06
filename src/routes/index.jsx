import { lazy } from "react";
import { useRoutes } from "react-router-dom";


export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
}

const Home = Loadable(lazy(() => import("../pages/Home")));
// Auth
