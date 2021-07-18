import React, { useRef, useState, useEffect } from "react";
import "./Overlay.css";
import Tv from "../assets/tv.mp4";
import Netflix from "../assets/netflix.mp4";
import Crypt from "../assets/crypto.mp4";
import ClearIcon from "@material-ui/icons/Clear";
import email from "../assets/email.mp4";
import about from "../assets/about.mp4";

function Overlay({ currentLocation, demo, trigger, mobile }) {
  return (
    <div className="overlay__container">
      <div className="overlay">
        {currentLocation === "/" ? (
          <video autoPlay loop muted className="vid__tv">
            <source src={Tv} type="video/mp4" />
          </video>
        ) : null}
        {trigger && currentLocation === "/Netflix" ? (
          <video autoPlay loop muted className="vid__netflix">
            <source src={Netflix} type="video/mp4" />
          </video>
        ) : null}
        {trigger && currentLocation === "/Crypto-Tracker" ? (
          <video autoPlay loop muted className="vid__crypto">
            <source src={Crypt} type="video/mp4" />
          </video>
        ) : null}
        {currentLocation === "/Email" ? (
          <video autoPlay loop muted className="vid__email">
            <source src={email} type="video/mp4" />
          </video>
        ) : null}
        {currentLocation === "/About" ? (
          <video autoPlay loop muted className="vid__about">
            <source src={about} type="video/mp4" />
          </video>
        ) : null}
      </div>
    </div>
  );
}

export default Overlay;
