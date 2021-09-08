// if else review

let age = 11;
let price = 0;

if (age >= 21) {
  // adult price
  price = 100;
} else {
  // child price
  price = 50;
}

// ternary (i.e. composed of three parts) operator
// part 1: condition
// condition ?
// part 2: if the condition is true do something
// price = 100
// part 3: if the condition is false do something
// price = 50

// syntax
// condition? "if true do something" : "if false do something"

// example
// the parenthesis are not necessary, for me this is added by prettier
age >= 21 ? (price = 100) : (price = 50);

// console.log(price);

// isUserLoggedIn ? "display use sensitive data" : "don't display anything";

// import React from "react";

// const ternary = () => {
//   return (
//     <div>
//       {userLoggedIn ? <button>Sign Out</button> : <button>Login</button>}
//       {user === "Juan" ? "Show Juan's profile" : "Show nothing"}
//     </div>
//   );
// };

// export default ternary;
