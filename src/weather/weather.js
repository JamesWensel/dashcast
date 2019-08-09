import React from "react";
import "./weather.css";

function getIcon(code) {
  let imagePath;
  if (code >= 200 && code < 300) {
    imagePath = "./images/tstorm.png"; //tstorm
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

function getDay(day) {
  let weekday = new Array(8);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  weekday[7] = "Sunday";
  return weekday[day];
}


const WeatherToday = ({ condition, temp, humidity, feel, currentCode }) => {
  return (
    <div id="todayCast">
      <label id="currentHeader"> Today's Forecast </label>
      <div id="currentInfo">
        <div id="currentLeft">
        <img id="currentImg" src={getIcon(parseInt(currentCode, 10))} alt="" /> <br />
          <label id="currentCondition"> {condition} </label> <br />
        </div>  
        <div id="currentRight">
          <label id="temp"> {temp}°F </label> <br />
          <div id="currentExtra">
            <label> Humidity: {humidity}% </label> <br /> 
            <label> Feels like: {feel}°F </label> 
          </div>
        </div>
      </div>
    </div>
  );
};

const Tomorrow = ({ day1, day1Condition, nextCode }) => {
  let d = new Date();
  let w = getDay(d.getDay() + 1);
  return (
    <div id="tomorrow">
      <div id="tomorrowBox">
        <label className="header"> {w}'s Forecast </label> <br/>
        <div className="info">
          <div className="left">
          <img className="icon" src={getIcon(nextCode)} alt="" />
            <label className="condition"> {day1Condition} </label>
          </div>
          <div className="right">
            <label> High: {Math.round(day1.max_temp)}°F </label> <br />
            <label> Low: {Math.round(day1.min_temp)}°F </label> <br /> <br />
            <label> Humidity: {day1.rh}% </label> <br />
            <label> Chance of Rain: {day1.pop}% </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const TwoDaysLater = ({ day2, day2Condition, lateCode }) => {
  let d = new Date();
  let w = getDay(d.getDay() + 2);
  return (
    <div id="later">
      <div id="laterBox">
        <label className="header"> {w}'s Forecast </label> <br/>
        <div className="info">
          <div className="left">
          <img className="icon" src={getIcon(lateCode)} alt="" />
            <label className="condition"> {day2Condition} </label> 
          </div>
          <div className="right">
            <label> High: {Math.round(day2.max_temp)}°F </label> <br />
            <label> Low: {Math.round(day2.min_temp)}°F </label> <br /> <br />
            <label> Humidity: {day2.rh}% </label> <br />
            <label> Chance of Rain: {day2.pop}% </label>
          </div>
        </div>
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
  <div>
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