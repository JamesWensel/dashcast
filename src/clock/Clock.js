import React from "react";
import useDate from "./useDate";
import useTime from "./useTime";

function Clock() {
  const { date } = useDate();
  const { time } = useTime();

  return (
    <h1 id="Time">
      {time}
      <p id="Date">{date}</p>
    </h1>
  );
}

export default Clock;
