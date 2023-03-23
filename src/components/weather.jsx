import React, { useState } from "react";
import "../components/weather.css";
import axios from "axios";
const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [lastEntry, setLastEntry] = useState([]);

  const handleClick = async () => {
    // console.log("clicked");
    // console.log(search);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d52a1d9ee6c760227cf3fa20172ade1f&units=metric`
      );
      setWeather(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }

    setLastEntry(search);
    if (lastEntry.length === 3) {
      setLastEntry([search, ...lastEntry.slice(0, 2)]);
    } else {
      setLastEntry([search, ...lastEntry]);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Weather App</h1>
        <div className="box-content">
          <div className="input-field">
            <input
              type="text"
              placeholder="Enter a city..."
              className="input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleClick} className="search-button">
              Search
            </button>
          </div>

          {typeof weather.main !== "undefined" ? (
            <div className="result">
              <p>Weather dtails of city: {weather.name} </p>
              <p>Current temperature: {weather.main.temp}°C</p>
              <p>
                Temperature range: {weather.main.temp_min}°C to{" "}
                {weather.main.temp_max}°C{" "}
              </p>
              <p>Humidity: {weather.main.humidity}</p>
              <p>Sea level: {weather.main.sea_level} </p>
              <p>Ground level: {weather.main.grnd_level}</p>

              <div>
                <h2 className="bottom-heading">Last 3 city entries</h2>
                <ul>
                  {lastEntry.map((city, id) => {
                    return (
                      <>
                        <div key={id}>
                          <p key={city}>{city}</p>
                        </div>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default Weather;
