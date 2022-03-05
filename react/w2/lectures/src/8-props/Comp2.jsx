import React, { Component } from "react";
import SharedComp from "./SharedComp";

class Comp2 extends SharedComp {
  state = {
    property2: "value 2",
  };
  render() {
    return <div></div>;
  }
}

export default Comp2;
