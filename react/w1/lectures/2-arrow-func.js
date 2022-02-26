// function declartion superpower: hoisting
hi();
function hi(param1, param2) {
  console.log("function declaration");
}

// hiArrow();
const hiArrow = (param1, param2) => {
  console.log("arrow function");
};
hiArrow();

