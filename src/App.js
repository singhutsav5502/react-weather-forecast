import React , {useState} from 'react';
import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/Current-wearther';
import CurrentWeatherDummy from './components/current-weather/Current-wearther-dummy';
import { WEATHER_API_KEY,WEATHER_API_URL } from './api';
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => { 
    const[lat,lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch,forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({city:searchData.label, ...weatherResponse});
        setForecast({city:searchData.label, ...forecastResponse});
      })
      .catch((err)=> {console.log(err)});
  };
  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className="container">
      <div className="search">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="weatherSide">
        <h1>Today</h1>
        {currentWeather?<CurrentWeather data = {currentWeather}/>:<CurrentWeatherDummy/>}
      </div>
    </div>
  );
}

export default App;
