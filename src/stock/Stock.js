import React from "react";
import useStockAPI from "./useStockAPI";
const config = require("../config.js");

const url = config.url;

function Stock() {
  let { close } = useStockAPI(url);
  let formattedData = parseFloat(close).toFixed(2);

  return <h1 id="stockPrice">TRHC Stock Price: ${formattedData}</h1>;
}

export default Stock;
