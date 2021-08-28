import React, { Component } from "react";

class Mapping extends Component {
  state = {
    arr: ["Juan", "Jess", "Jaime", "Jax", "Tiff", "Coco"],
  };

  // Create function to display array using map and keys

  render() {
    return (
      <div>
        <h1>Display array using just HTML</h1>
        <h1>Display array using a function</h1>
      </div>
    );
  }
}

export default Mapping;
