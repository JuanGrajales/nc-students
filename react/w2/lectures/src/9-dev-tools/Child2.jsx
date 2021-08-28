import React, { Component } from "react";

class Child2 extends Component {
  render() {
    return (
      <div>
        <h3>Child</h3>
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default Child2;
