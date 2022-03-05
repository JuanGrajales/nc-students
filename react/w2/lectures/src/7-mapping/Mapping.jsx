import React, { Component } from "react";

class Mapping extends Component {
  state = {
    arr: ["Juan", "Jess", "Jaime", "Jax", "Tiff", "Coco"],
  };

  // Create function to display array using map and keys
  displayNames = () => {
    return this.state.arr.map((name) => {
      return <li>{name}</li>;
    });
  };

  render() {
    return (
      <div>
        <h1>Display array using just HTML</h1>
        <ul>
          <li>{this.state.arr[0]}</li>
          <li>{this.state.arr[1]}</li>
          <li>{this.state.arr[2]}</li>
          <li>{this.state.arr[3]}</li>
          <li>{this.state.arr[4]}</li>
          <li>{this.state.arr[5]}</li>
        </ul>
        <h1>Display array using a function</h1>
        <ul>
          {this.state.arr.map((name) => {
            return <li>{name}</li>;
          })}
        </ul>
        <ul>{this.displayNames()}</ul>
      </div>
    );
  }
}

export default Mapping;
