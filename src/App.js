import React, { useState, useEffect } from "react";
import { Route, useLocation, useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Overlay from "./assets/Overlay.js";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Work from "./components/Work.js";
import About from "./components/About.js";
import Netflix from "./components/Netflix.js";
import Crypto from "./components/Crypto.js";
import Github from "./components/Github.js";
import Email from "./components/Email";
import { gsap } from "gsap";

const routes = [
  { path: "/", name: "Work", Component: Work },
  { path: "/about", name: "About", Component: About },
  { path: "/Netflix", name: "Netflix", Component: Netflix, id: 0 },
  {
    path: "/Crypto-Tracker",
    name: "Crypto-Tracker",
    Component: Crypto,
    id: 1,
  },
  { path: "/Image-Maker", name: "Github", Component: Github, id: 2 },
  { path: "/email", name: "Email", Component: Email },
];

function App() {
  const location = useLocation();
  const currentLocation = location.pathname;
  const history = useHistory();
  const [home, setHome] = useState(false);
  const [selected, setSelected] = useState(false);
  const [demo, setDemo] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
      if (size <= 450) {
        setMobile(true);
      } else if (size > 450) {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  const net = () => {
    setTimeout(() => {
      setTrigger(true);
    }, 2000);
  };

  function handleClick() {
    setTimeout(() => {
      history.push("/");
    }, 1500);
  }

  {
    console.log(size, mobile);
  }

  const onEnter = (node) => {
    gsap.from([node.children[0].childNodes], 1.5, {
      opacity: 1,
      scale: 1.5,
      ease: "power3.out",
    });
  };
  const onExit = (node) => {
    gsap.to([node.children[0].childNodes], 1.75, {
      opacity: 0,
      scale: 1,
      ease: "power3.out",
    });
  };

  return (
    <div className="App">
      <Overlay
        location={location}
        currentLocation={currentLocation}
        demo={demo}
        trigger={trigger}
        size={size}
        mobile={mobile}
      />
      <Header
        setDemo={setDemo}
        demo={demo}
        setTrigger={setTrigger}
        setHome={setHome}
      />
      <Navbar
        handleClick={handleClick}
        setHome={setHome}
        setSelected={setSelected}
        setDemo={setDemo}
        setTrigger={setTrigger}
      />
      <div className="content">
        {routes.map(({ path, Component, id }) => (
          <Route key="name" path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1250}
                classNames="page"
                unmountOnExit={true}
                onEnter={onEnter}
                onExit={onExit}
              >
                <div className="page">
                  <Component
                    home={home}
                    setHome={setHome}
                    currentLocation={currentLocation}
                    setSelected={setSelected}
                    selected={selected}
                    demo={demo}
                    setDemo={setDemo}
                    net={net}
                    handleClick={handleClick}
                    mobile={mobile}
                  />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </div>
  );
}

export default App;
