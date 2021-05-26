import React from "react";
import { useState } from "react";
import Tv from "../video/tv.mp4";
import Header from "../components/Header.js";
import Titles from "../components/Titles.js";
import Navbar from "../components/Navbar.js";

function Home() {
  const [active, setActive] = useState("");
  const clickHandler = (project) => {
    setActive(project);
  };

  return (
    <div className="container">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opactiy: "0.2",
          zIndex: "-100",
        }}
      >
        <source src={Tv} type="video/mp4" />
      </video>
      <Header />
      <div className="content__container">
        <Titles clickHandler={clickHandler} active={active} />
        <Navbar clickHandler={clickHandler} active={active} />
      </div>
    </div>
  );
}

export default Home;
