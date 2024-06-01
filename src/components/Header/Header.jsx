import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div>
      <Link to="/" className={styles.link}>
        <h1>Which City Weather</h1>
      </Link>
    </div>
  );
};
