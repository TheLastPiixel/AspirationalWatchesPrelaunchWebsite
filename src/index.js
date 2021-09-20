import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import InvictaLogo from "./invictalogoclear.png"
import TissotLogo from "./tissotlogo.png"
import StrapsCoLogo from "./strapscologo.png"

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 class="awtext">
          Aspirational Watches
          <br />
          <br />
          <img src={TissotLogo} height="60px"/>
          <img src={InvictaLogo} height="60px"/>
          <img src={StrapsCoLogo} height="60px"/>
          <br />
          <br />        
        </h1>
        <h2>
          Website Coming Soon!
        </h2>
        <Timer />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
