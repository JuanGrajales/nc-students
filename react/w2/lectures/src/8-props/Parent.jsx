// Steps to creating a variable?
// 1.
// 2.
// Where can you make a variable?
// Where can't you make a variable?
// How do you use a variable?

import Child from "./Child";
import React, { Component } from "react";

class Parent extends Component {
  state = {
    // how we pass a value from the state of one component to the another component?
    name: "Rudy",
  };
  render() {
    // const arr  = 'hi'
    // console.log(arr)
    return (
      <div>
        <h1>Parent</h1>
        <p>State value: {this.state.name}</p>
        <Child name={this.state.name} />
      </div>
    );
  }
}

export default Parent;
