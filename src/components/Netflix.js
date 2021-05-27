import React from "react";
import "./Netflix.css";
import Net from "../video/netflix.mp4";
import Header from "./Header.js";
import Navbar from "./Navbar.js";

function Netflix() {
  return (
    <>
      <video autoPlay loop muted>
        <source src={Net} type="video/mp4" />
      </video>
      <Header />
      <div className="content__container">
        <div className="container__titles">
          <h2>NETFLIX CLONE</h2>
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default Netflix;
