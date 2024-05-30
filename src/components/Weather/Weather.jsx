import { useState } from "react";

import styles from "./Weather.module.css";
import { Clock } from "../Clock/Clock";

const baseAPI = "https://api.openweathermap.org/data/2.5/weather";
const myAPIkey = "9055fb4826563eac25a47e211073a627"; //Beckie's API key

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();

  const weatherAPI = `${baseAPI}?q=${city}&units=metric&APPID=${myAPIkey}`;

  const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=hourly,daily,current&units=metric&APPID=9055fb4826563eac25a47e211073a627`;

  function handleCityInput() {
    fetch(weatherAPI)
      .then((response) => response.json())
      .then((json) => {
        setWeatherData(json);
      })
      .catch((error) => console.error("Error:", error));
    setCity("");
  }

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCityInput();
    }
  };

  console.log(weatherData);

  return (
    <div>
      {weatherData ? (
        <>
          <div className={styles.container}>
            <h2>
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <Clock timezone={weatherData.timezone} />
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Feels like: {weatherData.main.feels_like}</p>
            <p>Description: {weatherData.weather[0].description}</p>
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              value={city}
              placeholder="Enter city"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleCityInput}>weather</button>
          </div>
        </>
      ) : (
        <div className={styles.inputBox}>
          <input
            type="text"
            value={city}
            placeholder="Enter city"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleCityInput}>weather</button>
        </div>
      )}
    </div>
  );
};
