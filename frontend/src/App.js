import './App.css';
import { FaBeer } from 'react-icons/fa';
import {useEffect} from "react";

const API_KEY = process.env.WEATHER_MAP_API_KEY;


function App() {
useEffect(() => {
      console.log(process.env.WEATHER_MAP_API_KEY);
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`)
          .then((response) => response.json())
          .then((data) => console.log(data));
    }
,[])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <h3> Lets go for a <FaBeer /></h3>

      </header>
    </div>
  );
}

export default App;
