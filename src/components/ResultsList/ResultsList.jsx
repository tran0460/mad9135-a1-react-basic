import React from "react";
import ListItem from "../ListItem/ListItem";
import styles from "./ResultsList.module.css";

const ResultsList = (props) => {
  const { results } = props;
  if (!results) return;
  return (
    <div className={styles["list-container"]}>
      <h2 className={styles["list-title"]}>Search Results</h2>
      <div className={styles["items-container"]}>
        {results.map((item) => {
          return <ListItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default ResultsList;
