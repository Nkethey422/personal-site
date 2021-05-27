import React from "react";
import { NavLink } from "react-router-dom";

const h2__titles = [
  { to: "/Netflix", key: "nav__link", name: "NETFLIX CLONE" },
  { to: "/Crypto-Tracker", key: "nav__link", name: "CRYPTO TRACKER" },
  { to: "/Image-Maker", key: "nav__link", name: "IMAGE MAKER" },
];

function Titles() {
  return (
    <div className="container__titles">
      <>
        {h2__titles.map(({ to, key, name }) => (
          <h2>
            <NavLink to={to} exact className={key}>
              <span>{name}</span>
            </NavLink>
          </h2>
        ))}
      </>
    </div>
  );
}

export default Titles;
