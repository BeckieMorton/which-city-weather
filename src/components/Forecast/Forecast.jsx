import styles from "./Forecast.module.css";

export const Forecast = () => {
  return (
    <div>
      <p className={styles.header}>Weekly Forecast</p>
      <div className={styles.forecastContainer}>
        <div className={styles.forecastBox}>
          <p className={styles.airTxt}>temp</p>
          <img src="." alt="sky" />
          <p className={styles.airHeader}>date</p>
        </div>
        <div className={styles.forecastBox}>
          <p className={styles.airTxt}>temp</p>
          <img src="." alt="sky" />
          <p className={styles.airHeader}>date</p>
        </div>
        <div className={styles.forecastBox}>
          <p className={styles.airTxt}>temp</p>
          <img src="." alt="sky" />
          <p className={styles.airHeader}>date</p>
        </div>
        <div className={styles.forecastBox}>
          <p className={styles.airTxt}>temp</p>
          <img src="." alt="sky" />
          <p className={styles.airHeader}>date</p>
        </div>
      </div>
    </div>
  );
};
