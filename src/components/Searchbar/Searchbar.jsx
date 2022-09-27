import React from "react";
import styles from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <div className={styles["input-container"]}>
      <input
        className={styles["input-field"]}
        type="text"
        placeholder="Search bar"
      />
    </div>
  );
};

export default Searchbar;
