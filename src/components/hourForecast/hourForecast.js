import React from 'react';
import './HourForecast.css';
const HourForecast = ({ data }) => {
  return (
   <div className="hourly-details-grid">
    {data.list.slice(0,6).map( (item,indx)=>(
      <div className="hourly-details-grid-item" key={indx}>
      <div className="hourWeather">
        <div className="left">
          <p className="hourTemp"> {Math.round(item.main.temp)}°C</p>
          <div className='time-container'>
            <img alt="weather" className="hour-icon" src={process.env.PUBLIC_URL + `/icons/${item.weather[0].icon}.png`} />
            <p className="time">time</p>
          </div>
        </div>
      </div>
    </div>
     
  )
                              )
}
     </div>
  );
};
export default HourForecast;