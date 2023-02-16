import React from 'react';
import './HourForecast.css'
const HourForecast = () => {
  return (
    <div className="hourly-details-grid-item">
      <div className="hourWeather">
        <div className="left">
          <p className="temperature">  on</p>
          <div className='time-container'>
            <img alt="weather" className="weather-icon" src={process.env.PUBLIC_URL + "/icons/01d.png"} />
            <p className="time">time</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HourForecast;