import React from "react";

export const GithubCatDark = (props) => {
  const { size } = props;
  const src = require("./assets/GitHub-Mark-120px-plus.png");
  return (
    <img
      style={{
        width: size,
        height: size,
      }}
      src={src}
    />
  );
};

export const GithubCatLight = (props) => {
  const { size } = props;
  const src = require("./assets/GitHub-Mark-Light-120px-plus.png");
  return (
    <img
      style={{
        width: size,
        height: size,
      }}
      src={src}
    />
  );
};
