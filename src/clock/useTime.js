import { useState, useEffect } from "react";

function useTime() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    async function formatTime() {
      let now = new Date();
      
      let hours = 
        now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
      let minutes =
        now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
      let seconds =
        now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
      let pm = 1 && now.getHours() >= 12; 

      setTime(hours + ":" + minutes + ":" + seconds + " " + (pm ? "PM" : "AM"));
    }

    formatTime();

    const interval = setInterval(() => {
      formatTime();
    }, 1000);
    return () => clearInterval(interval);
  });

  return { time };
}

export default useTime;
