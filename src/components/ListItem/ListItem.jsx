import React from "react";
import styles from "./ListItem.module.css";

const ListItem = (props) => {
  const { data, onListItemClick } = props;
  return (
    <div className={styles["item-container"]} onClick={onListItemClick}>
      <img
        className={styles["card-image"]}
        src={data.avatar_url}
        alt="user image"
      />
      <p className={styles["card-title"]}>{data.login}</p>
    </div>
  );
};

export default ListItem;
