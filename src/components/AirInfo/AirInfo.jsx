import styles from "./AirInfo.module.css";

export const AirInfo = ({ weatherData }) => {
  //not visibility full is 10,000 which = 10km. this is the highest visibility that can be reported. So we need to divide the visibility number by 1000.

  console.log(`inside the air component:`, weatherData);
  return (
    <div className={styles.airContainer}>
      <div className={styles.airBox}>
        <img src="./assets/wind.png" alt="wind image" />
        <p className={styles.airTxt}>{weatherData.wind.speed.toFixed(1)}km/h</p>
        <p className={styles.airHeader}>Wind</p>
      </div>
      <div className={styles.airBox}>
        <img src="./assets/humidity.png" alt="humidity image" />
        <p className={styles.airTxt}>{weatherData.main.humidity}%</p>
        <p className={styles.airHeader}>Humidity</p>
      </div>
      <div className={styles.airBox}>
        <img src="./assets/visibility.png" alt="visibility image" />
        <p className={styles.airTxt}>{weatherData.visibility / 1000}km</p>
        <p className={styles.airHeader}>Visibility</p>
      </div>
    </div>
  );
};
