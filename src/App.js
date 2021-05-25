import "./App.css";
import Tv from "./video/tv.mp4";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="App">
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
          filter: "brightness(70%)",
        }}
      >
        <source src={Tv} type="video/mp4" />
      </video>
      <div className="container">
        <Header />
        <div className="content__container">
          <div className="container__titles">
            <h2>
              <span>NETFLIX CLONE</span>
            </h2>
            <h2>
              <span>CRYPTO TRACKER</span>
            </h2>
            <h2>
              <span>IMAGE MAKER</span>
            </h2>
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
