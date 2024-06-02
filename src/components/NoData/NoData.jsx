import styles from "./NoData.module.css";
import { Link } from "react-router-dom";

export const NoData = () => {
  return (
    <div className={styles.container}>
      <h1>We could not find your city. Try again.</h1>
      <Link to="/" className={styles.link}>
        <p>Home</p>
      </Link>
    </div>
  );
};
