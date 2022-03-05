import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child Component</h1>
        <p>Props: {this.props.name}</p>
      </div>
    );
  }
}

export default Child;
