import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router-dom";

import { CenterDiv, Home } from "./pages";
import { AppLayout } from "./App.layout";

const RouterBuilder = () => {
  const generalRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/center-div",
      element: <CenterDiv />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];

  const routes: RouteObject[] = [
    {
      element: <AppLayout />,
      children: generalRoutes,
    },
  ];

  return routes;
};

export default RouterBuilder;
