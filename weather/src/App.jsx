import { useState } from 'react';
import SearchBox from './searchBox';
import WeatherCard from './weatherCard';
import './App.css';

function App() {
  const [weatherinfo, setWeatherInfo] = useState({
    main: {
      feels_like: 40,
      temp: 35,
      temp_min: 29,
      temp_max: 37,
      humidity: 80,
    },
    name:"delhi"
  });

  function updateInfoweather(newresult) {
    console.log(newresult);
    setWeatherInfo(newresult);
  }

  return (
    <div className="app-container">
      <SearchBox updateInfo={updateInfoweather} />
      <WeatherCard weatherobj={weatherinfo} />
    </div>
  );
}

export default App;
