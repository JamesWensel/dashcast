import { useState, useEffect } from "react";
import useFormattedDate from "./useFormattedDate";
import PropTypes from "prop-types";

const series = "Time Series (Daily)";
const identifier = ["1. open", "2. high", "3. low", "4. close", "5. volume"];

function useStockAPI(url) {
  const [open, setOpen] = useState(0);
  const [high, setHigh] = useState(0);
  const [low, setLow] = useState(0);
  const [close, setClose] = useState(0);
  const [volume, setVolume] = useState(0);
  const date = useFormattedDate();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      res.json().then(res => {
        let stockData = res[series][date];
        setOpen(stockData[identifier[0]]);
        setHigh(stockData[identifier[1]]);
        setLow(stockData[identifier[2]]);
        setClose(stockData[identifier[3]]);
        setVolume(stockData[identifier[4]]);
      });
    }

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 900000);
    return () => clearInterval(interval);
  }, [url, date]);

  return {
    open,
    high,
    low,
    close,
    volume
  };
}

useStockAPI.PropTypes = {
  url: PropTypes.string
};

export default useStockAPI;
