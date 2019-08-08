import React from "react";
import useDate from "./useDate";
import useTime from "./useTime";
import "./clock.css";

function Clock() {
  const { date } = useDate();
  const { time } = useTime();

  return (
    <div id="clock">
      <div id="date">{date}</div>
      <div id="time">{time} </div>
    </div>
  );
}

export default Clock;
