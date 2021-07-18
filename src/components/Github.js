import React, { useRef, useEffect, useState } from "react";
import "../App.css";
import gsap from "gsap";
import ImageMaker from "../assets/github/ImageMaker";

function Github({ home, currentLocation }) {
  let btns = useRef(null);
  let over = useRef(null);
  const [flattened, setFlattened] = useState([]);
  const [color, setColor] = useState("#ffffff");
  const handler = () => {
    const pattern = makePattern();
    const newColor = squareColor();
    setFlattened(pattern);
    setColor(newColor);
  };

  function squareColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function makePattern() {
    let flattened = [];
    let blnk = [];
    for (var i = 0; i < 5; i++) {
      const appnd = [];
      for (var j = 0; j < 3; j++) {
        if (Math.random() < 0.5) {
          appnd.push(1);
        } else {
          appnd.push(0);
        }
      }
      appnd.push(appnd[1], appnd[0]);
      blnk.push(appnd);
      flattened = blnk.flat();
    }
    return flattened;
  }

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
    gsap.to([".container__image"], 1.95, {
      ease: "power3.out",
      opacity: 1,
    });
  }, []);

  {
    console.log(home);
  }

  if (currentLocation === "/") {
    gsap.to([".container__buttons"], 1.85, {
      ease: "power3.out",
      x: -64,
      opacity: 0,
    });
    gsap.to(
      [".overview"],
      1.95,
      {
        ease: "power3.out",
        y: 64,
        opacity: 0,
      },
      gsap.to([".image__container"], 0.5, {
        ease: "power3.out",
        opacity: 0,
      })
    );
  }
  return (
    <>
      <>
        <h2 className="active__title">IMAGE MAKER</h2>
      </>
      <div className="image__container">
        <ImageMaker
          className="image__maker"
          flattened={flattened}
          color={color}
          handler={handler}
        />
      </div>
      <div className="container__overview">
        <div className="container__buttons" ref={(el) => (btns = el)}>
          <button className="btn">VIEW CODE</button>
          <button
            className="btn"
            onClick={() => {
              handler();
            }}
          >
            NEW IMAGE
          </button>
        </div>
        <div className="overview" ref={(el) => (over = el)}>
          <p>
            Currently, GitHub has over 40 million users each assigned an avatar
            image. The GitHub Image Maker randomly generates a pattern and color
            in a 5x5 grid. Click New Image to give it a try!{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Github;
