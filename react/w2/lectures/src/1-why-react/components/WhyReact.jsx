import React, { Component } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

class WhyReact extends Component {
  render() {
    return (
      <div>
        {/* Virtual DOM and reusable components */}
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
    );
  }
}

export default WhyReact;
