import { Clock } from "../Clock/Clock";
import { AirInfo } from "../AirInfo/AirInfo";
import { Forecast } from "../Forecast/Forecast";

import styles from "./Weather.module.css";

export const Weather = ({ weatherData }) => {
  return (
    <div>
      <div className={styles.container}>
        <h2>
          {weatherData.name}, {weatherData.sys.country}
        </h2>
        <Clock timezone={weatherData.timezone} />
        <p className={styles.main}>{weatherData.weather[0].main}</p>
        <p className={styles.temperature}>
          {Math.round(weatherData.main.temp)}
          <span style={{ fontSize: "80px", verticalAlign: "middle" }}>°</span>
        </p>
        <p className={styles.summaryHeader}>Daily Summary</p>
        <p className={styles.summary}>
          It now it feels like {Math.round(weatherData.main.feels_like)}°, with
          a max of&nbsp;
          {Math.round(weatherData.main.temp_max)}° and min of
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
    </div>
  );
};
