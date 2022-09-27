import React from "react";

const ResultsList = (props) => {
  const { results } = props;
  if (!results) return;
  return (
    <div>
      {results.map((item) => {
        return <div key={item.id}>{item.login}</div>;
      })}
    </div>
  );
};

export default ResultsList;
