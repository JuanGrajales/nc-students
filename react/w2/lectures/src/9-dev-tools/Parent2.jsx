import React, { Component } from "react";
import Child2 from "./Child2";

class Parent2 extends Component {
  state = {
    name: "Important information",
  };
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <div>State property name: how can we display the value?</div>
        <Child2 />
      </div>
    );
  }
}

export default Parent2;
