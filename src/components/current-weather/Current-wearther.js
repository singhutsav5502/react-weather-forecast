import React from 'react';
import './Current-weather.css'
const CurrentWeather = () => {
    return (
        <div className="weather-container">
            <div className="weather">
                <div className="left">
                    <p className="temperature">  18°C</p>
                    <div className='description-container'>
                        <img alt="weather" className="weather-icon" src="icons/01d.png" />
                        <p className="description">Description</p>
                        <p className="city">Name  </p>
                    </div>
                </div>
                <div className="right">
                    <div className='right-items'>

                        <div className="details">
                        <div className="parameter-row">
                                <span className="parameter-label">Feels like</span>
                                <span className="parameter-value"> 22°C </span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Wind</span>
                                <span className="parameter-value"> 2 m/s</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Humidity</span>
                                <span className="parameter-value"> 15 %</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Pressure</span>
                                <span className="parameter-value"> 15 hPa </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CurrentWeather;