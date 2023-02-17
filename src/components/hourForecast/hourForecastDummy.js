import React from 'react';
import './HourForecast.css';
const HourForecastDummy = ({ visibility, theme, suffix }) => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  return (
    <div className={`hourly-details-grid ${visibility} ${theme}`}>
      {arr.slice(0, 6).map((item, indx) => {
        return (
          <div className="hourly-details-grid-item" key={indx}>
            <div className={`hourWeather ${theme}`}>
              <div className="left">
                <p className="hourTemp">{`xx${suffix}`}</p>
                <div className='time-container'>
                  <img alt="weather" className="hour-icon" src={process.env.PUBLIC_URL + `/icons/01d.png`} />
                  <p className="time">y AM</p>
                </div>
              </div>
            </div>
          </div>

        )
      }
      )
      }
    </div>
  );
};
export default HourForecastDummy;