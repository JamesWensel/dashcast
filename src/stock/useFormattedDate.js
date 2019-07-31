import { useState } from "react";

function useFormattedDate() {
  const [date] = useState(formatDate());
  return date;
}

function formatDate() {
  let today = new Date();
  let modifier = getModifier(
    today.getDay(),
    today.getHours(),
    today.getMinutes()
  );

  return (
    "" +
    today.getFullYear() +
    "-" +
    addZero(today.getMonth() + 1) +
    "-" +
    addZero(today.getDate() - modifier)
  );
}

function addZero(num) {
  return num < 10 ? "0" + num : "" + num;
}

function getModifier(dayOfWeek, hours, minutes) {
  let modifier = 0;

  if (dayOfWeek === 0) {
    modifier = 2;
  } else if (dayOfWeek === 6) {
    modifier = 1;
  } else if ((hours === 9 && minutes < 30) || hours < 9) {
    modifier = dayOfWeek === 1 ? 3 : 1;
  }

  return modifier;
}

export default useFormattedDate;
