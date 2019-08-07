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
        }
        changeImage();

        const interval = setInterval(() => {
            changeImage();
        }, 20000);
        return () => clearInterval(interval);

    }, []);
    
    return (
        <div id="board" >
            <div id="widget"> 
                <WeatherWidget /> <br /> 
                
            </div> 
            <div>
                <StockWidget />
                <Clock />
            </div>
        </div>
    );
};

export default Board;