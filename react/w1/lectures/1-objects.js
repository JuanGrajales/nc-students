// Slack channels - join class Slack channel and 3-react
// Slide Deck will be sent through Slack at the beginning of every workshop
// Black Box concept

// Things to keep in mind
// * How long would it take you to learn a new language?
// * 2 hours a day might not be possible for everyone, that's okay
// * Consistency is more important, think of the gym
// * Tutorial Hell, learning an instrument
// * Finish the material before the workshop
// * Nucamp will teach you to drive the car, not how the engine works that comes later
// * The material in Nucamp might not be enough sometimes or it might not suit your style of learning (medium or devpost) ask instructor if you can’t find anything
// * If there's something you're not satisfied with during the workshop then let me know as soon as you comfortably can. I don't anyone being unsatisfied for four hours. Examples: if you want to move to a different breakout room, want me to repeat something, etc.
// * If you do not finish the material for the week do not attempt to finish it during the workshop.
// * Get your monies worth. Ask questions, make connections, network.
// * Format to asking a question: send a message in the 3-React channel with the code error, what you are trying to accomplish, and share your code
// * Repeatition is key
// * IMPORTANT: you will never stop learning as a dev and you will never stop messing up. It's okay, embrace it.

// data types: String, Number, Boolean, Undefined, Null, Symbol, BigInt, Object

// We will focus on Objects
// camelCamel
let str = `Juan`;
let num = 2.12345;

// Object syntax
const objName = {
  message: "hello",
  msg2: "bonjour",
};

// methods vs functions
const obj2 = {
  message: "hello",
  msg2: "bonjour",
  method1() {
    console.log("this is a method");
  },
};

function foo() {
  console.log(`this is a function`);
}

// review: calling a function
// foo();

// calling a method
// objectName.methodName()
// obj2.method1();

// when would you use an object instead of a regular variable or vice versa?
const player = {
  height: "160",
  goalsPerGame: 5,
  hairColor: "red",
  name: "Jess",
  id: 1,
};

let playerHeight = "160";
let goalsPerGame = 7;
let hairColor = "red";

let currentGoals = 5;

// example object
const bicycle = {
  color: "blue",
  electric: false,
  method1: function () {
    console.log("long form of declaring a method");
  },
  start() {
    console.log("You began to pedal the bike.");
    return 2;
  },
  bikeColor() {
    console.log(this.color);
  },
};

console.log(bicycle);

// how do you change the color of the bike?
// console.log(bicycle);

// how do you change the start method?
// bicycle.start();
