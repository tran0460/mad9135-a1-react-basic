import React from "react";
import styles from "./Header.module.css";
import { GithubCatDark } from "../../logoHelper.jsx";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <GithubCatDark size={64} />
      <h1>Github User Finder</h1>
    </div>
  );
};

export default Header;
