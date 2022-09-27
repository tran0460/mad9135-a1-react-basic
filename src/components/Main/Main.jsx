import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles["main-container"]}>
      <Searchbar />
    </div>
  );
};

export default Main;
