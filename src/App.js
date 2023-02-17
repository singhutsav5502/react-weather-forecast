import React, { useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/Current-wearther';
import CurrentWeatherDummy from './components/current-weather/Current-wearther-dummy';
import Forecast from './components/forecast/Forecast.js';
import HourForecast from './components/hourForecast/hourForecast.js';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import ForecastDummy from './components/forecast/ForecastDummy.js'
import HourForecastDummy from './components/hourForecast/hourForecastDummy';
function App({themeImageHandler}) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [visibleHourly, setVisibleHourly] = useState("visible");
  const [visibleWeekly, setVisibleWeekly] = useState(" ");
  const [tempActiveCelc, setTempActiveCelc] = useState("active");
  const [tempActiveFar, setTempActiveFar] = useState(" ");
  const [tempSuffix, setTempSuffix] = useState("°C");
  const [isCelc, setIsCelc] = useState(true);
  const [theme, setTheme] = useState("light");
  const hourlyClickHandler = () => {
    setVisibleHourly("visible");
    setVisibleWeekly(" ");
  }
  const weeklyClickHandler = () => {
    setVisibleHourly(" ");
    setVisibleWeekly("visible");
  }
  const handleCelcSwitch = () => {
    setTempActiveCelc("active");
    setTempActiveFar(" ");
    setTempSuffix(" °C");
    setIsCelc(true);
  }
  const handleFarSwitch = () => {
    setTempActiveCelc(" ");
    setTempActiveFar("active");
    setTempSuffix(" °F");
    setIsCelc(false);
  }
  const lightThemeClick = () => { 
    setTheme("light");
    themeImageHandler(true);
  }
  const darkThemeClick = () => { 
    setTheme(" ");
    themeImageHandler(false);
  }
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        console.log(forecastResponse);
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => { console.log(err) });
  };
  return (
    <div className="container">
      <div className="search">
        <div className = "theme-buttons-container">
          <button className = "theme-button" onClick={lightThemeClick}>Day</button>
          <button className = "theme-button" onClick={darkThemeClick}>Night</button>
        </div>
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="weatherSide">

        <div className="weatherContainer">
          <h1>Today</h1>
          <div className="temp-unit-button-container">
            <div className={`temp-unit-button celc ${tempActiveCelc} buttonU ${theme}`}
              onClick={handleCelcSwitch}>°C</div>
            <div className={`temp-unit-button celc ${tempActiveFar} buttonU ${theme}`}
              onClick={handleFarSwitch}>°F</div>
          </div>
          {currentWeather ? <CurrentWeather
            data={currentWeather}
            suffix={tempSuffix}
            isCelc={isCelc}
            theme={theme}
          />
            : <CurrentWeatherDummy theme={theme} />}
          <div className="buttons-container">
            <div className="hourlyButtonContainer">
              <button className={`forecast-title-button hourly button ${theme} ${visibleHourly}`}
                onClick={hourlyClickHandler} >Hourly </button>
            </div>
            <div className="weeklyButtonContainer">
              <button className={`forecast-title-button weekly button ${theme} ${visibleWeekly}`}
                onClick={weeklyClickHandler}>Weekly </button>
            </div>
          </div>
        </div>
        {forecast ?
          <HourForecast data={forecast}
            visibility={visibleHourly}
            suffix={tempSuffix}
            isCelc={isCelc}
            theme={theme}
          />
          : <HourForecastDummy visibility={visibleHourly} suffix={tempSuffix} theme={theme} />}


        {forecast ?
          <Forecast
            data={forecast}
            visibility={visibleWeekly}
            suffix={tempSuffix}
            isCelc={isCelc}
            theme={theme}
          />
          :
          <ForecastDummy visibility={visibleWeekly} suffix={tempSuffix} theme={theme} />}
      </div>
    </div>
  );
}

export default App;
