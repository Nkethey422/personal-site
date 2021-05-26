import React from "react";
import { NavLink } from "react-router-dom";

function Titles({ clickHandler, active }) {
  return (
    <div className="container__titles">
      <>
        <h2>
          <NavLink
            to="/Netflix"
            exact
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span>NETFLIX CLONE</span>
          </NavLink>
        </h2>
        <h2>
          <NavLink
            to="/Crypto-Tracker"
            exact
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span>CRYPTO TRACKER</span>
          </NavLink>
        </h2>
        <h2>
          <NavLink
            to="/Image-Maker"
            exact
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span>IMAGE MAKER</span>
          </NavLink>
        </h2>
      </>
    </div>
  );
}

export default Titles;
