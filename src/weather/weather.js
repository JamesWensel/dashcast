import React from "react";
import "./weather.css";

function getIcon(code) {
  let imagePath;
  if (code >= 200 && code < 300) {
    imagePath = "./images/tstormj.png"; //tstorm
  } else if (code >= 300 && code < 600) {
    imagePath = "./images/rain.png"; //rain
  } else if (code >= 600 && code < 700) {
    imagePath = "./images/snow.png"; //snow
  } else if (code >= 700 && code < 800) {
    imagePath = "./images/fog.png"; //mist/fog
  } else if (code === 800) {
    imagePath = "./images/clear.png"; //clear
  } else if (code >= 801) {
    imagePath = "./images/cloudy.png"; //cloudy
  }
  return imagePath;
}

const WeatherHeader = () => <h1> Mount Pleasant, SC </h1>;

const WeatherToday = ({ condition, temp, humidity, feel, currentCode }) => {
  return (
    <div id="todayCast">
      <label id="temp"> {temp}° </label> <br />
      <img id="currentImg" src={getIcon(currentCode)} alt="" /> <br />
      <label id="condition"> {condition} </label> <br />
      <div id="extra">
        <label> Humidity: {humidity}% </label> <br />
        <label> Feels like: {feel}° </label> <br /> <br />
      </div>
    </div>
  );
};

const Tomorrow = ({ day1, day1Condition, nextCode }) => {
  return (
    <div id="tomorrow">
      <label className="title"> Tomorrow: </label> <br/>
      <label className="futureCondition"> {day1Condition} </label> <br />
      <img src={getIcon(nextCode)} alt="" />
      <div className="laterExtra">
        <label> Max Temp: {Math.round(day1.max_temp)}° </label> <br />
        <label> Min Temp: {Math.round(day1.min_temp)}° </label> <br />
        <label> Humidity: {day1.rh}% </label> <br />
        <label> Chance of Rain: {day1.pop}% </label>
      </div>
    </div>
  );
};

const TwoDaysLater = ({ day2, day2Condition, lateCode }) => {
  return (
    <div id="later">
      <label className="title"> Next Day: </label> <br/>
      <label className="futureCondition"> {day2Condition} </label> <br />
      <img src={getIcon(lateCode)} alt="" />
      <div className="laterExtra">
        <label> Max Temp: {Math.round(day2.max_temp)}° </label> <br />
        <label> Min Temp: {Math.round(day2.min_temp)}° </label> <br />
        <label> Humidity: {day2.rh}% </label> <br />
        <label> Chance of Rain: {day2.pop}% </label>
      </div>
    </div>
  );
};

const WeatherForecast = ({ day1, day2, day1Condition, day2Condition, nextCode, lateCode }) => (
  <div id="forecast">
    <Tomorrow day1={day1} day1Condition={day1Condition} nextCode={nextCode}/>
    <TwoDaysLater day2={day2} day2Condition={day2Condition} lateCode={lateCode}/>
  </div>
);

const Weather = ({
  condition,
  temp,
  humidity,
  feel,
  day1,
  day2,
  day1Condition,
  day2Condition,
  currentCode,
  nextCode,
  lateCode
}) => (
  <div id="weather">
    <WeatherHeader />
    <WeatherToday
      condition={condition}
      temp={temp}
      humidity={humidity}
      feel={feel}
      currentCode={currentCode}
    />
    <WeatherForecast
      day1={day1}
      day2={day2}
      day1Condition={day1Condition}
      day2Condition={day2Condition}
      nextCode={nextCode}
      lateCode={lateCode}
    />
  </div>
);

export default Weather;