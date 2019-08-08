import React, { useEffect } from "react";
import WeatherWidget from "./weather/WeatherWidget";
import StockWidget from "./stock/StockWidget";
import Clock from "./clock/Clock";
import "./dash.css";

function Board() {
    useEffect(() => {
        async function changeImage() {
            const image = await fetch('https://source.unsplash.com/collection/8272744/1700x1100')
            document.body.style.backgroundImage = "url(" + image.url + ")";
            console.log(image.url)
        }
        changeImage();

        const interval = setInterval(() => {
            changeImage();
        }, 10000);
        return () => clearInterval(interval);

    }, []);
    
    return (
        <div id="board" >
            <div id="row1">
                <div id="one">
                    <Clock />
                </div>
                <div id="two">
                    <StockWidget />
                </div>
            </div>
            <div id="row2">
                <div id="three">
                    <WeatherWidget />
                </div>
                <div id="four"> 
                </div>
            </div>
        </div>
    );
};

export default Board;