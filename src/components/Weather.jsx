import { useState } from "react";

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

  return (
    <div>
      <p>Weather component</p>
      <input
        type="text"
        value={city}
        placeholder="Enter city"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleCityInput}>weather</button>
      {weatherData ? (
        <div>
          <p>
            City: {weatherData.name}, {weatherData.sys.country}
          </p>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Feels like: {weatherData.main.feels_like}</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      ) : null}
    </div>
  );
};
