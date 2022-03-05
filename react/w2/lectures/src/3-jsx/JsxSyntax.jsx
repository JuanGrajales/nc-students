import React, { Component } from "react";

class JsxSyntax extends Component {
  render() {
    const userIsLoggedIn = false;
    const str = "hi";

    // string interpolation
    const str1 = `Hello and then use a variable ${3 + 5}`;
    return (
      <div>
        <h1>What is JSX?</h1>
        <p>
          Pretty much looks like HTML except that you can embed JS inside of it
        </p>

        <div>HTML: 3 + 5</div>
        <div>JSX: {3 + 5}</div>
        <br />

        <div>HTML: str + " hello"</div>
        <div>JSX: {str + " hello"}</div>
        <br />

        <div>HTML: 5 &lt; 1 ? "true" : "false"</div>
        <div>JSX: {5 < 1 ? "true" : "false"}</div>
        <br />

        <div>HTML: userIsLoggedIn ? "Hi Juan" : "Login Here"</div>
        <div>
          JSX:{" "}
          {userIsLoggedIn ? <button>Sign Out</button> : <button>Login</button>}
        </div>
        <br />
      </div>
    );
  }
}

// // ternary operator
// if(5<1){ //something is true
//   // do something if true
// } else // it's false{
//   // do something if false
// }

// 5 < 1 ? "true" : "false";

export default JsxSyntax;
