import React from 'react';
import './Current-weather.css'
const CurrentWeather = ({ data, suffix , isCelc}) => {
    let temp = Math.round(data.main.temp);
    let feelsLike = data.main.feels_like;
    if (!isCelc) {
        temp = Math.round((temp * 1.8) + 32);
        feelsLike = (data.main.feels_like*1.8) +32;
    }
    else{
        temp = Math.round(data.main.temp); 
        feelsLike = data.main.feels_like;
    }
    return (
        <div className="weather-container">
            <div className="weather">
                <div className="left">
                    <p className="temperature">{`${temp} ${suffix}`}</p>
                    <div className='description-container'>
                        <img alt="weather" className="weather-icon" src={process.env.PUBLIC_URL + `/icons/${data.weather[0].icon}.png`} />
                        <p className="current-weather-description">{data.weather[0].description}</p>
                        <p className="city">{data.city}  </p>
                    </div>
                </div>
                <div className="right">
                    <div className='right-items'>

                        <div className="details">
                            <div className="parameter-row">
                                <span className="parameter-label">Feels like</span>
                                <span className="parameter-value"> {`${feelsLike} ${suffix}`} </span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Wind</span>
                                <span className="parameter-value"> {data.wind.speed} m/s</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Humidity</span>
                                <span className="parameter-value"> {data.main.humidity} %</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Pressure</span>
                                <span className="parameter-value"> {data.main.pressure} hPa </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CurrentWeather;