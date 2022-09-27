import React from "react";
import styles from "./ResultsList.module.css";

const ResultsList = (props) => {
  const { results } = props;
  if (!results) return;
  return (
    <div className={styles["list-container"]}>
      <h2>Search Results</h2>
      {results.map((item) => {
        return <div key={item.id}>{item.login}</div>;
      })}
    </div>
  );
};

export default ResultsList;
