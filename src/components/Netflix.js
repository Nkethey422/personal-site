import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { gsap } from "gsap";

function Netflix({ home, setHome, selected, demo, setDemo, net, mobile }) {
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
  {
    console.log(mobile);
  }

  return (
    <>
      <>
        {selected & !demo & !mobile ? (
          <h2 className="active__title" id="netflix">
            NETFLIX CLONE
          </h2>
        ) : null}
        {mobile ? <h2 className="active__title">NETFLIX CLONE</h2> : null}
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
          <div className="description">
            <p>
              Built in React using Axios, and TMDB's API, this Netflix Clone is
              able to call for today's titles in: Trending, Netflix Originals,
              Top Rated, Action, Comedy, Horror, Romance, and Documentary
              genres.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Netflix;
