import React, { useState, useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Main.module.css";

const Main = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [results, setResults] = useState([]);
  const url = `https://api.github.com/search/users?q=`;
  const getData = () => {
    console.log(query);
    fetch(`${url}${query}&per_page=5`).then(async (res) => {
      const data = await res.json();
      setData(data);
    });
  };
  useEffect(() => {
    if (!data) return;
    setResults(data.items);
    console.log(results);
  }, [data]);
  return (
    <div className={styles["main-container"]}>
      <Searchbar query={query} setQuery={setQuery} onSearch={getData} />
    </div>
  );
};

export default Main;
