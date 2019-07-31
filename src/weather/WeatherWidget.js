import React, { useState, useEffect } from "react";
import Weather from "./weather";
import "./weather.css";
var config = require('../config.js');

function WeatherWidget() {
  const [condition, setCondition] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [feel, setFeel] = useState("");
  const [day1, setDay1] = useState("");
  const [day2, setDay2] = useState("");
  const [day1Condition, setDay1Condition] = useState("");
  const [day2Condition, setDay2Condition] = useState("");
  const [currentCode, setCurrentCode] = useState("");
  const [nextCode, setNextCode] = useState("");
  const [lateCode, setLateCode] = useState("");

  const cityID = config.cityID;
  const appID = config.appID;

  const currentURL = 
    "https://api.weatherbit.io/v2.0/current?key=" +
    appID +
    "&city_id=" +
    cityID +
    "&units=I";
  
  const forecastURL =
    "https://api.weatherbit.io/v2.0/forecast/daily?key=" +
    appID +
    "&days=3" +
    "&city_id=" +
    cityID +
    "&units=I";

  useEffect(() => {
    async function fetchData() {
      const currentRes = await fetch(currentURL);
      const currentData = await currentRes.json();
      const forecastRes = await fetch(forecastURL);
      const forecastData = await forecastRes.json();
      setCondition(currentData.data[0].weather.description);
      setTemp(currentData.data[0].temp);
      setHumidity(currentData.data[0].rh);
      setFeel(Math.round(currentData.data[0].app_temp));
      setDay1(forecastData.data[1]);
      setDay2(forecastData.data[2]);
      setDay1Condition(forecastData.data[1].weather.description);
      setDay2Condition(forecastData.data[2].weather.description);
      setCurrentCode(currentData.data[0].weather.code)
      setNextCode(forecastData.data[1].weather.code);
      setLateCode(forecastData.data[2].weather.code);
    }

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 3600000);
    return () => clearInterval(interval);

  }, []);

  return (
    <div id="WeatherWidget">
      <Weather
        condition={condition}
        temp={temp}
        humidity={humidity}
        feel={feel}
        day1={day1}
        day2={day2}
        day1Condition={day1Condition}
        day2Condition={day2Condition}
        currentCode={currentCode}
        nextCode={nextCode}
        lateCode={lateCode}
      />
    </div>
  );
}

export default WeatherWidget;
