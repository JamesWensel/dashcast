import React, { useState, useEffect } from "react";
import WeatherWidget from "./weather/WeatherWidget";
import StockWidget from "./stock/StockWidget";
import Clock from "./clock/Clock";
import "./dash.css";

function Board() {

    useEffect(() => {
        async function changeImage() {
            const image = await fetch('https://source.unsplash.com/collection/8272744/1800x1200')
            const url = image.url;
            console.log(image.url);
            document.body.style.backgroundImage = "url(" + image.url + ")";
        }
        changeImage();

        const interval = setInterval(() => {
            changeImage();
          }, 10000);
          return () => clearInterval(interval);

    }, []);
    

    return (
        <div id="board" >
            <div id="widget"> 
                 <WeatherWidget /> 
            </div> 
            <div>
                <StockWidget />
            </div>
        </div>
    );
};

export default Board;