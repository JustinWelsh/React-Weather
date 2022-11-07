import './App.css';
import { MdLocationPin } from 'react-icons/md';
import {useEffect, useState} from "react";

const API_KEY = process.env.WEATHER_MAP_API_KEY;

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null)

  useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=29.424349&lon=-98.491142&units=imperial&appid=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => setCurrentWeatherData(data));
      }
,[])
    console.log(currentWeatherData);
    return (
    <div className="App">
      <header className="App-header">

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>

          <div className="card-body">

            <div className="flex items-center gap-2">
              <MdLocationPin />
              <h3>{currentWeatherData.name}</h3>
            </div>

            <div>{currentWeatherData.weather[0].icon}</div>
            <h2 className="card-title">{currentWeatherData?.main.temp.toFixed(2)}°F</h2>

          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
