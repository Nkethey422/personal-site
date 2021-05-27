import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container__navbar">
      <div className="navbar__buttons">
        <div className="wo">
          <button className="work">
            <NavLink className="nav__link" to="/" exact>
              WORK
            </NavLink>
          </button>
        </div>
        <div className="ab">
          <button className="about">
            <NavLink className="nav__link" to="/about" exact>
              ABOUT
            </NavLink>
          </button>
        </div>
      </div>
      <div className="navbar__icons">
        <div className="handler">
          <LinkedInIcon
            className="icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/Neeraj-Kethey")
            }
          />
        </div>
        <div className="handler">
          <GitHubIcon
            className="icon"
            onClick={() => window.open("https://www.github.com/Nkethey422")}
          />
        </div>
        <div className="handler">
          <EmailIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
