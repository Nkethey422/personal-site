import React, { useEffect } from "react";
import "../App.css";
import { gsap } from "gsap";

function About({ demo, currentLocation, home }) {
  if (currentLocation === "/About") {
    const home = false;
  }
  useEffect(() => {
    gsap.from([".active__title"], 1.75, {
      delay: 1.25,
      ease: "power3.out",
      opacity: 0,
      y: 64,
    });
    gsap.from([".overview"], 1.95, {
      delay: 1.65,
      ease: "power3.out",
      opacity: 0,
      y: 64,
    });
  }, []);

  if (currentLocation === "/About") {
    gsap.from([".active__title"], 1.75, {
      delay: 1.25,
      ease: "power3.out",
      opacity: 0,
      y: 64,
    });
    gsap.from([".overview"], 1.95, {
      delay: 1.65,
      ease: "power3.out",
      opacity: 0,
      y: 64,
    });
  }

  if (home) {
    gsap.to([".active__title"], 1, {
      ease: "power3.out",
      opacity: 0,
    });
    gsap.to([".overview"], 1, {
      ease: "power3.out",
      opacity: 0,
    });
  }

  return (
    <>
      <>{!demo ? <h2 className="active__title">ABOUT</h2> : null}</>
      <div className="container__overview">
        <div className="overview">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            vitae nemo maxime tempora corporis doloribus! Qui, dicta architecto.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
