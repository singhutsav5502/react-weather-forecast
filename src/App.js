import React from 'react';
import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/Current-wearther';
function App() {
  const handleOnSearchChange = (searchData) => { console.log(searchData) };
  return (
    <div className="container">
      <div className="search">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="weatherSide">
        <h1>Today</h1>
        <CurrentWeather />
      </div>
    </div>
  );
}

export default App;
