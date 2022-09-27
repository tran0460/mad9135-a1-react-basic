import React, { useState, useEffect } from "react";
import ResultsList from "../ResultsList/ResultsList";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Main.module.css";
import Modal from "react-modal";
import ModalContent from "../ModalContent/ModalContent";

const Main = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [results, setResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const url = `https://api.github.com/search/users?q=`;
  const getData = () => {
    fetch(`${url}${query}&per_page=5`).then(async (res) => {
      const data = await res.json();
      setData(data);
    });
  };
  const handleListItemClick = (itemData) => {
    fetch(itemData.url).then(async (res) => {
      if (res.status != 200) return;
      const data = await res.json();
      setCurrentItem(data);
      setModalVisible(true);
    });
  };
  useEffect(() => {
    if (!data) return;
    setResults(data.items);
  }, [data]);
  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0 ,0 ,0 , 0.5)",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      background: "#fff",
      scrollbar: "none",
      padding: "10px",
      border: "none",
      borderRadius: "16px",
      width: "fit-content",
      height: "fit-content",
    },
  };

  return (
    <div className={styles["main-container"]}>
      <Searchbar query={query} setQuery={setQuery} onSearch={getData} />
      <ResultsList onListItemClick={handleListItemClick} results={results} />
      <Modal
        isOpen={modalVisible}
        onAfterOpen={() => {}}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        style={modalStyles}
        contentLabel="Example Modal">
        <ModalContent data={currentItem} />
      </Modal>
    </div>
  );
};

export default Main;
