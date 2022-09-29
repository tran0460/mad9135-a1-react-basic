import React from "react";
import styles from "./ModalContent.module.css";
import XIcon from "../../assets/Icons/XIcon";
import { GithubCatDark } from "../../logoHelper";
const ModalContent = (props) => {
  const { data, onRequestClose } = props;
  if (!data) return;
  return (
    <div className={styles["modal-content-container"]}>
      <span onClick={onRequestClose} className={styles["close-button"]}>
        Close
        <XIcon size={24} />
      </span>
      <img className={styles["modal-image"]} src={data.avatar_url} alt="" />
      <p className={styles["modal-user-name"]}>{data.name}</p>
      <p style={{ display: data.location ? "" : "none" }}>{data.location}</p>
      <p style={{ display: data.company ? "" : "none" }}>{data.company}</p>
      <p
        style={{ display: data.bio ? "" : "none" }}
        className={[styles["modal-bio"]]}>
        {data.bio}
      </p>
      <p className={styles["modal-social-info"]}>Following: {data.following}</p>
      <p className={styles["modal-social-info"]}>Followers: {data.followers}</p>
      <a
        className={styles["modal-link"]}
        href={data.html_url}
        rel="noreferrer"
        target="_blank">
        <GithubCatDark size={20} />
        View on github
      </a>
    </div>
  );
};

export default ModalContent;
