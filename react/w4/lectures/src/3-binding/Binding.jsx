import React, { Component } from "react";

class Binding extends Component {
  //   constructor(props) {
  //     super(props);
  //     // This binding is necessary to make `this` work in the callback
  //     // make a bad click good
  //     this.badClick = this.badClick.bind(this);
  //   }

  goodClick = () => {
    console.log(this);
  };
  badClick() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <h1>Binding</h1>
        <button onClick={this.goodClick}>Good</button>
        <button onClick={this.badClick}>Bad</button>
      </div>
    );
  }
}

export default Binding;
