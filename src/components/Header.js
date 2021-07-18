import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

function Header({ setDemo, demo, setTrigger, setHome }) {
  return (
    <div className="header">
      <h1>N.Kethey</h1>
      {demo ? (
        <div className="x">
          <ClearIcon
            style={{ color: "lightblue" }}
            className="x__button"
            onClick={() => {
              setDemo(false);
              setHome(true);
              setTrigger(false);
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Header;
