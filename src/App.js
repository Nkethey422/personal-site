import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Netflix from "./components/Netflix";
import Crypto from "./components/Crypto";
import Github from "./components/Github";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/Netflix", name: "Netflix", Component: Netflix },
  { path: "/Crypto-Tracker", name: "Crypto-Tracker", Component: Crypto },
  { path: "/Image-Maker", name: "Github", Component: Github },
];

function App() {
  return (
    <div className="App">
      <div className="container">
        {routes.map(({ path, Component }) => (
          <Route key="name" path={path} exact>
            <div className="page">
              <Component />
            </div>
          </Route>
        ))}
      </div>
    </div>
  );
}

export default App;
