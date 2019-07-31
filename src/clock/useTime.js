import { useState, useEffect } from "react";

function useTime() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    async function formatTime() {
      let now = new Date();
      let hours = now.getHours();
      let minutes =
        now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
      let seconds =
        now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
      setTime(hours + ":" + minutes + ":" + seconds);
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
