import React from "react";
import useStockAPI from "./useStockAPI";
const config = require("../config.js");

const url = config.url;

function Stock() {
  let { open, close } = useStockAPI(url);
  let formattedClose = parseFloat(close).toFixed(2);
  let formattedOpen = parseFloat(open).toFixed(2);
  let difference = (formattedClose - formattedOpen).toFixed(2);
  let change = difference >= 0 ? "+$" + difference : "-$" + Math.abs(difference);

  return (
    <div id="stockInfo">
      <div id="stockPrice"> Stock Value: ${formattedClose} </div> 
      <div id="change"> {change} </div>
    </div>
  );
}

export default Stock;
