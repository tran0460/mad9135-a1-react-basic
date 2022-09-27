import React from "react";
import ListItem from "../ListItem/ListItem";
import styles from "./ResultsList.module.css";

const ResultsList = (props) => {
  const { results } = props;
  if (!results) return;
  return (
    <div className={styles["list-container"]}>
      <h2>Search Results</h2>
      {results.map((item) => {
        return <ListItem key={item.id} data={item} />;
      })}
    </div>
  );
};

export default ResultsList;
