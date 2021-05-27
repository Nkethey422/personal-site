import React from "react";
import Header from "./Header.js";
import Navbar from "./Navbar.js";

function Github() {
  return (
    <>
      <Header />
      <div className="content__container">
        <div className="container__titles">
          <h2>IMAGE MAKER</h2>
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default Github;
