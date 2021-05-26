import React from "react";
import Header from "./Header.js";
import Navbar from "./Navbar.js";

function Crypto() {
  return (
    <div className="container">
      <Header />
      <div className="content__container">
        <div className="container__titles">
          <h2>CRYPTO TRACKER</h2>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Crypto;
