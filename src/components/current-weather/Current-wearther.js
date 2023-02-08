import React from 'react';
import './Current-weather.css'
const CurrentWeather = () => {
    return (
        <div className="weather-container">
            <div className="weather">
                <div className="top">
                    <p className="city">Name</p>
                    <p className="description">Description</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>
        </div>
    );
};
export default CurrentWeather;