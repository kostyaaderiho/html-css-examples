import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RouterBuilder from "./App.router";
import "./index.css";

const App = () => {
  const routes = useMemo(() => RouterBuilder(), []);

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
