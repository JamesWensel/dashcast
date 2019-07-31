import React from "react";
import useDate from "./useDate";
import useTime from "./useTime";
import "./clock.css";

function Clock() {
  const { date } = useDate();
  const { time } = useTime();

  return (
    <div id="clock">
      <h1 id="Time">
        {time}
        <p id="Date">{date}</p>
      </h1>
    </div>
  );
}

export default Clock;
