import React from "react";
import styles from "./ModalContent.module.css";

const ModalContent = (props) => {
  const { data } = props;
  if (!data) return;
  return (
    <div className={styles["modal-content-container"]}>
      <img className={styles["modal-image"]} src={data.avatar_url} alt="" />
      <p className={styles["modal-user-name"]}>{data.name}</p>
      <p className={styles["modal-bio"]}>{data.bio}</p>
      <p className={styles["modal-social-info"]}>Following: {data.following}</p>
      <p className={styles["modal-social-info"]}>Followers: {data.followers}</p>
    </div>
  );
};

export default ModalContent;
