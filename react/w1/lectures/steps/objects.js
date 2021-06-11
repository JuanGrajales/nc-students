// How to create an object
// step 1: choose keyword (const, let, var)
// step 2: create the object name (use camelCase)
// step 3: use assignment operator (=)
// step 4: open up curly braces {}
// step 5: add as many key/value pairs as you want, each key/value will be separated by a comma

// step 1: const
// step 2: const car
// step 3: const car =
// step 4: const car = {}
// step 5: const car = {color: "red"}

// const car = {
//   color: "red",
//   make: "Toyota",
// };

// How to create a property (key/value pair) for an object
// step 1: choose a name for the property (use camelCase)
// step 2: add a colon (:) after the property name
// step 3: add the value after the colon
// value can be any data type (i.e. String, Number, Boolean, Undefined, Null, Symbol, BigInt, Object)

// step 1: model
// step 2: model:
// step 3: model: "RAV4"

const car = {
  color: "red",
  make: "Toyota",
  mode: "RAV4",
};

// How to add a property to an object that was already created
// step 1: specify the object name of the object you want to add the property to
// step 2: use dot notation (i.e. add a dot after the object name with no spaces)
// step 3: specify the new property name (use camelCase)
// step 4: use the assignment operator (=)
// step 5: give it a value

// step 1: car
// step 2: car.
// step 3: car.owner
// step 4: car.owner =
// step 5: car.owner = "Juan"

car.owner = "Juan";

// How to add a method to an object
// step 1: inside the curly braces of the object add the name of the function (use camelCase)
// step 2: add the parenthesis after then function name
// step 3: add curly braces after the parenthesis
// step 4: add the block of code inside the curly  braces
// step 5(optional): add parameters to the function is needed. Parameters are always created inside the parenthesis of the function.

// step 1:
// const objWithMethod = {
//     method1
// }
// step 2:
// const objWithMethod = {
//     method1()
// }
// step 3:
// const objWithMethod = {
//     method1(){}
// }
// step 4:
// const objWithMethod = {
//   method1() {
//     console.log("this is a method");
//   },
// };
// step 5(optional):
const objWithMethod = {
  method1(message) {
    console.log("this is a method" + message);
  },
};

// How to call a method
// step 1: specify the object name where the method is located
// step 2: use dot notation (add a dot after the object name)
// step 3: specify the method name
// step 4: add parenthesis after the method name
// step 5(optional): add arguments if the method has parameters

// step 1: objWithMethod
// step 2: objWithMethod.
// step 3: objWithMethod.method1
// step 4: objWithMethod.method1()
// step 5(optional):
objWithMethod.method1("this is my message");

// How to change the value of a property
// step 1: specify the object name
// step 2: use dot notation
// step 3: specify the property name
// step 4: use the assignment operator
// step 5: give the new value

// step 1: car
// step 2: car.
// step 3: car.color
// step 4: car.color =
// step 5:
car.color = "blue";

// How to change a method of an object
// step 1: specify the object name
// step 2: use dot notation
// step 3: specify the method name
// step 4: use the assignment operator
// step 5: use the keyword function
// step 6: add parenthesis
// step 7: add curly braces
// step 8: add the code inside the curly braces

// step 1: objWithMethod
// step 2: objWithMethod.
// step 3: objWithMethod.method1
// step 4: objWithMethod.method1 =
// step 5: objWithMethod.method1 = function
// step 6: objWithMethod.method1 = function()
// step 7: objWithMethod.method1 = function() {}
// step 8:
objWithMethod.method1 = function () {
  console.log("changing the method");
};
