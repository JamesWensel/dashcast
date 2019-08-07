import React from "react";
import useStockAPI from "./useStockAPI";
const config = require("../config.js");

const url = config.url;

function Stock() {
  let { open, close } = useStockAPI(url);
  let formattedClose = parseFloat(close).toFixed(2);
  let formattedOpen = parseFloat(open).toFixed(2);
  let difference = (formattedClose - formattedOpen).toFixed(2);
  let change = difference >= 0 ? "+$" + difference : "$" + difference;

  return (
    <h1 id="stockPrice">
      TRHC Stock Price: ${formattedClose} {change}
    </h1>
  );
}

export default Stock;
