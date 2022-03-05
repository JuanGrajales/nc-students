// Extensions: prettier, reactjs code snippets
// What is the syntax for a class component?

// First Component
import React, { Component } from "react";

class HelperComp extends Component {
  render() {
    return <div></div>;
  }
}

class Comp1 extends Component {
  render() {
    return (
      <div>
        <h1>First Component</h1>
        <HelperComp />
      </div>
    );
  }
}

export default Comp1;

export const arr = [1, 2, 3];

// Anybody know a shortcut for making a component? rcc
// import React, { Component } from 'react';

// class Comp1 extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default Comp1;
