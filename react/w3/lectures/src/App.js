import React, { Component, Fragment } from "react";
// import Destructuring from "./1-destructuring/Destructuring";
// import FunctionalComp from "./3-functional-component/FunctionalComp";
// import ReactFragment from "./4-react-fragment/ReactFragment";
// import RouterSetup from "./5-react-router/RouterSetup";
import RouterParams from "./6-router-params/RouterParams";

class App extends Component {
  state = {
    arr: [1, 2, 3, 4],
  };

  displayArr = () => {
    return this.state.arr.map((number) => {
      // return < key={"unique"}>{number}</>; // errorrrrr
      return <Fragment key={"unique"}>{number}</Fragment>;
    });
  };
  render() {
    return (
      <>
        {/* <Destructuring /> */}
        {/* <FunctionalComp /> */}
        {/* <ReactFragment /> */}
        {/* {this.displayArr()} */}
        {/* <RouterSetup /> */}
        <RouterParams />
      </>
    );
  }
}

export default App;
