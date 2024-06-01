import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Search.module.css";

const baseAPI = "https://api.openweathermap.org/data/2.5/weather";
const myAPIkey = "9055fb4826563eac25a47e211073a627"; //Beckie's API key

export const Search = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();
  const navigate = useNavigate();
  const weatherAPI = `${baseAPI}?q=${city}&units=metric&APPID=${myAPIkey}`;

  const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=hourly,daily,current&units=metric&APPID=9055fb4826563eac25a47e211073a627`;

  function handleCityInput() {
    fetch(weatherAPI)
      .then((response) => response.json())
      .then((json) => {
        setWeatherData(json);
        navigate("/weatherresults", { state: { weatherData: json } });
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

  return (
    <div>
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
    </div>
  );
};
