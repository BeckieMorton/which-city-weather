import { useState } from "react";

import styles from "./Weather.module.css";
import { Clock } from "../Clock/Clock";
import { AirInfo } from "../AirInfo/AirInfo";
import { Forecast } from "../Forecast/Forecast";

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
            <p className={styles.main}>{weatherData.weather[0].main}</p>
            <p className={styles.temperature}>
              {Math.round(weatherData.main.temp)}
              <span style={{ fontSize: "80px", verticalAlign: "middle" }}>
                °
              </span>
            </p>
            <p className={styles.summaryHeader}>Daily Summary</p>
            <p className={styles.summary}>
              It now it feels like {Math.round(weatherData.main.feels_like)}°,
              with a max of&nbsp;
              {Math.round(weatherData.main.temp_max)}° and min of{" "}
              {Math.round(weatherData.main.temp_min)}° today. Currently,&nbsp;
              {weatherData.name} has&nbsp;
              {weatherData.weather[0].description}.
            </p>
            <div>
              <AirInfo weatherData={weatherData} />
            </div>
            <div>
              <Forecast weatherData={weatherData} />
            </div>
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
