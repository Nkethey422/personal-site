import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../App.css";

function Navbar() {
  return (
    <div className="container__navbar">
      <div className="navbar__buttons">
        <div className="wo">
          <button>WORK</button>
        </div>
        <div className="ab">
          <button>ABOUT</button>
        </div>
      </div>
      <div className="navbar__icons">
        <div className="handler">
          <LinkedInIcon
            style={{ color: "lightblue" }}
            className="icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/Neeraj-Kethey")
            }
          />
        </div>
        <div className="handler">
          <GitHubIcon
            style={{ color: "lightblue" }}
            className="icon"
            onClick={() => window.open("https://www.github.com/Nkethey422")}
          />
        </div>
        <div className="handler">
          <EmailIcon style={{ color: "lightblue" }} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
