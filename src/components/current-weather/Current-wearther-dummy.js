import React from 'react';
import './Current-weather.css'
const CurrentWeatherDummy = ({theme}) => {
    return (
        <div className="weather-container">
            <div className={`weather ${theme}`}>
                <div className="left">
                    <p className="temperature">  Description</p>
                    <div className='description-container'>
                        <img alt="weather" className="weather-icon" src={process.env.PUBLIC_URL + "/icons/01d.png"} />
                        <p className="description">Description</p>
                        <p className="city">Select Location  </p>
                    </div>
                </div>
                <div className="right">
                    <div className='right-items'>

                        <div className="details">
                        <div className="parameter-row">
                                <span className="parameter-label">Feels like</span>
                                <span className="parameter-value"> - </span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Wind</span>
                                <span className="parameter-value"> -</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Humidity</span>
                                <span className="parameter-value"> -</span>
                            </div>
                            <div className="parameter-row">
                                <span className="parameter-label">Pressure</span>
                                <span className="parameter-value"> - </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CurrentWeatherDummy;