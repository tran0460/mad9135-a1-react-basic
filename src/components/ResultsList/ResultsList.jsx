import React from "react";
import ListItem from "../ListItem/ListItem";
import styles from "./ResultsList.module.css";

const ResultsList = (props) => {
  const { results, onListItemClick } = props;
  if (!results)
    return (
      <div className={styles["list-container"]}>
        <p className={styles["welcome-text"]}>Welcome</p>
        <p className={styles["welcome-text"]}>
          Begin by typing in a keyword on the search bar and search
        </p>
      </div>
    );
  return (
    <div className={styles["list-container"]}>
      <h2 className={styles["list-title"]}>Search Results</h2>
      <div className={styles["items-container"]}>
        {results.map((item) => {
          return (
            <ListItem
              onListItemClick={onListItemClick}
              key={item.id}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResultsList;
