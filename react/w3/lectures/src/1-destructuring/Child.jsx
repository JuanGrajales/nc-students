import React from "react";

// const Child = (props) => {
const Child = ({ name }) => {
  return (
    <div>
      <h1>Child</h1>
      <p>Prop 1: {name}</p>
    </div>
  );
};

export default Child;
