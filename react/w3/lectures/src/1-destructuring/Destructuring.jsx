import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>Parent</h1>
        <p>How do we pass a data from parent component to child component</p>
        <Child />
      </div>
    );
  }
}

export default Parent;
