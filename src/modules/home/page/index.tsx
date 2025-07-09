import React from "react";
import styles from "./_home.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className={styles["home-container"]}>
      <div className={styles["cosmos-background"]}>
        <div className={styles["stars-container"]}></div>
      </div>
    </div>
  );
};

export default HomePage;
