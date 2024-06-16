import { Outlet } from "react-router-dom";

import { Nav } from "./Nav";
import "./Main.css";

export const Main = () => {
  return (
    <main className="main">
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
};
