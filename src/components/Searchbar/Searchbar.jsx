import React from "react";
import styles from "./Searchbar.module.css";
import MagnifyingGlass from "../../assets/Icons/MagnifyingGlass";

const Searchbar = (props) => {
  const { onSearch } = props;
  return (
    <div className={styles["input-container"]}>
      <input
        className={styles["input-field"]}
        type="text"
        placeholder="Search bar"
      />
      <span className={styles["icon-container"]} onClick={() => onSearch()}>
        <MagnifyingGlass color={"#000"} size={24} />
      </span>
    </div>
  );
};

export default Searchbar;
