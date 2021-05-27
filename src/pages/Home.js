import React from "react";
import Tv from "../video/tv.mp4";
import Header from "../components/Header.js";
import Titles from "../components/Titles.js";
import Navbar from "../components/Navbar.js";

function Home() {
  return (
    <>
      <video autoPlay loop muted>
        <source src={Tv} type="video/mp4" />
      </video>
      <Header />
      <div className="content__container">
        <Titles />
        <Navbar />
      </div>
    </>
  );
}

export default Home;
