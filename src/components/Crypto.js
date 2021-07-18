import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { gsap } from "gsap";

function Crypto({ home, setHome, selected, demo, setDemo, net, mobile }) {
  let btns = useRef(null);
  let over = useRef(null);

  useEffect(() => {
    gsap.from([".active__title"], 1.75, {
      delay: 1.25,
      ease: "power3.out",
      opacity: 0,
      y: 64,
    });
    gsap.from([btns], 1.85, {
      delay: 1.55,
      ease: "power3.out",
      opacity: 0,
      x: -64,
    });
    gsap.from([over], 1.95, {
      delay: 1.65,
      ease: "power3.out",
      opacity: 0,
      y: 64,
    });
  }, []);

  if (home === false) {
    gsap.to([".container__buttons"], 1.85, {
      ease: "power3.out",
      x: -64,
      opacity: 0,
    });
    gsap.to([".overview"], 1.95, {
      ease: "power3.out",
      y: 64,
      opacity: 0,
    });
  }

  if (!demo) {
    gsap.to([".container__buttons"], 1.85, {
      ease: "power3.out",
      x: 0,
      opacity: 1,
    });
    gsap.to([".overview"], 1.95, {
      ease: "power3.out",
      y: 0,
      opacity: 1,
    });
  }
  if (demo) {
    gsap.to([".overlay"], 1, {
      delay: 1.2,
      ease: "power3.out",
      transformOrigin: "center",
      zIndex: 1,
      border: "0.3em solid rgba(75, 222, 241)",
      scale: 0.8,
    });
    gsap.to([".container__buttons"], 1, {
      ease: "power3.out",
      x: -64,
      opacity: 0,
    });
    gsap.to([".overview"], 1, {
      ease: "power3.out",
      y: 64,
      opacity: 0,
    });
  }

  if (!demo) {
    gsap.to([".overlay"], 1, {
      ease: "power3.out",
      scale: 1,
    });
  }

  return (
    <>
      <>
        {!demo ? (
          <h2 className="active__title" id="crypto">
            CRYPTO TRACKER{" "}
          </h2>
        ) : null}
      </>
      <div className="container__overview">
        <div className="container__buttons" ref={(el) => (btns = el)}>
          {!mobile ? (
            <button
              className="btn"
              onClick={() => {
                setDemo(true);
                setHome(false);
                net();
              }}
            >
              DEMO
            </button>
          ) : null}
          <button className="btn">VIEW CODE</button>
        </div>
        <div className="overview" ref={(el) => (over = el)}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            vitae nemo maxime tempora corporis doloribus! Qui, dicta architecto.
          </p>
        </div>
      </div>
    </>
  );
}

export default Crypto;
