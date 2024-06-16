import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/center-div">Center div</Link>
        </li>
      </ul>
    </nav>
  );
};
