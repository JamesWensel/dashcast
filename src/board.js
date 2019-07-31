import React, { useState, useEffect } from "react";
import WeatherWidget from "./weather/WeatherWidget";
import StockWidget from "./stock/StockWidget";
import "./dash.css";

function Board() {
    return (
        <div id="board">
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