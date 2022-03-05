import React from "react";
// import WhyReact from "./1-why-react/components/WhyReact";
// import JsxSyntax from "./3-jsx/JsxSyntax";
// import Comp1, { arr } from "./4-making-components/Comp1";
// import Mapping from "./7-mapping/Mapping";
import Parent from "./8-props/Parent";

const App = () => {
  const var1 = "hi";
  console.log(var1);
  return (
    <div>
      {/* <WhyReact /> */}
      {/* <JsxSyntax /> */}
      {/* <Comp1 /> */}
      {/* <Mapping /> */}
      <Parent />
    </div>
  );
};

export default App;
