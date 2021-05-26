import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Netflix from "./components/Netflix";
import Crypto from "./components/Crypto";
import Github from "./components/Github";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component="Home">
        <Home />
      </Route>
      <Route path="/about" exact component="About">
        <About />
      </Route>
      <Route path="/Netflix" exact component="Netflix">
        <Netflix />
      </Route>
      <Route path="/Crypto-Tracker" exact component="Crypto">
        <Crypto />
      </Route>
      <Route path="/Image-Maker" exact component="Github">
        <Github />
      </Route>
    </div>
  );
}

export default App;
