import React from "react";
import Stock from "./Stock";
import "./stock.css";

function StockWidget() {
  return (
    <div id="stock">
      <img id="logo" src="./images/trhcLogo.png" alt="TRHC Logo" />
      <Stock />
    </div>
  );
};

export default StockWidget;

