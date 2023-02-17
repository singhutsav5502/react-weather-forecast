import React from 'react';
import './HourForecast.css';
const HourForecast = ({ data, visibility , isCelc , suffix }) => {

  return (
    <div className={`hourly-details-grid ${visibility}`}>
      {data.list.slice(0, 6).map((item, indx) => {
        let temp = Math.round(item.main.temp);
        if (!isCelc) {
          temp = Math.round((temp * 1.8) + 32);
        }
        else {
          temp = Math.round(item.main.temp);
        }
        const time = (new Date(item.dt_txt)).getUTCHours();
        return (
          <div className="hourly-details-grid-item" key={indx}>
            <div className="hourWeather">
              <div className="left">
                <p className="hourTemp">{`${temp}${suffix}`}</p>
                <div className='time-container'>
                  <img alt="weather" className="hour-icon" src={process.env.PUBLIC_URL + `/icons/${item.weather[0].icon}.png`} />
                  <p className="time">{time > '12' ? `${time - 12} PM` : `${time} AM`}</p>
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
export default HourForecast;