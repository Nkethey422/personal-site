import React from "react";
import Header from "./Header.js";
import Navbar from "./Navbar.js";

function Github() {
  return (
    <div className="container">
      <Header />
      <div className="content__container">
        <div className="container__titles">
          <h2>IMAGE MAKER</h2>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Github;
