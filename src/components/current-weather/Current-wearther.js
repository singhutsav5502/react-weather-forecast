import React from 'react';
import './Current-weather.css'
const CurrentWeather = () => {
    return (
        <div className="weather-container">
            <div className="weather">
                <div className="left">
                    <p className="city">Name  </p>
                    <p className="temperature">  18°C</p>
                    <div className='description-container'>
                        <img alt="weather" className="weather-icon" src="icons/01d.png" />
                        <p className="description">Description</p>
                    </div>
                </div>
                <div className="right">
                    <div className='right-items'>

                        <div className="details">
                            <div className="parameter-row">
                                <span className="parameter-label">Details</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Feels like</span>
                                <span className="parameter-value"> 22℃</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CurrentWeather;