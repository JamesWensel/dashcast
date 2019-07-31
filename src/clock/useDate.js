import { useState, useEffect } from "react";

const weekdayArray = [
  "Sunday,",
  "Monday,",
  "Tuesday,",
  "Wednesday,",
  "Thursday,",
  "Friday,",
  "Saturday,"
];
const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December"
];

function useDate() {
  const [date, setDate] = useState(0);

  useEffect(() => {
    let today = new Date();

    setDate(
      weekdayArray[today.getDay()] +
        " " +
        monthArray[today.getMonth()] +
        " " +
        today.getDate()
    );
  }, []);

  return { date };
}

export default useDate;
