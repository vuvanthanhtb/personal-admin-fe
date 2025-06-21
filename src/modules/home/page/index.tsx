import { IllustrationIcon } from "shared";
import styles from "./_home.module.scss";

const HomePage = () => {
  return (
    <div className={styles["home-container"]}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>
      <img src={IllustrationIcon} alt="Illustration" />
      <p>Feel free to explore the features and functionalities.</p>
    </div>
  );
};

export default HomePage;
