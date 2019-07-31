import React from "react";
import ReactDOM from "react-dom";
import Stock from "./Stock";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <img id="logo" src="trhcLogo.png" alt="TRHC Logo" />
      <Stock />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
