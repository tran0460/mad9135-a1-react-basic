import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <h1>Github User Finder</h1>
    </div>
  );
};

export default Header;
