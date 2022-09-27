import React from "react";

const ModalContent = (props) => {
  const { data } = props;
  if (!data) return;
  return <div>{data.name}</div>;
};

export default ModalContent;
