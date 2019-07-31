import React from "react";
import Stock from "./Stock";
import "./stock.css";

function StockWidget() {
  return (
    <div className="App">
      <img id="logo" src="./images/trhcLogo.png" alt="TRHC Logo" />
      <Stock />
    </div>
  );
};

export default StockWidget;

