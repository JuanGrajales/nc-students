// Tutorial Hell
// Focus on learning to drive the car
// How much time did you spend studying this week?
// Have you started your project?

// object destructuring

let obj = {
  fname: "Juan",
  age: 21,
  stack: "MERN",
  obj2: {
    p1: "Jess",
  },
};

// nested object destructuring
let {
  obj2: { p1 },
} = obj;

let fname = obj.fname;
let age = obj.age;
let stack = obj.stack;

// let { fname } = obj;
// let { age } = obj;
// let { stack } = obj;

let { fname, age, stack } = obj;
// console.log(fname, age, stack);

// destructuring params of functions

function func(objParam) {
  console.log("property 1: " + objParam.fname);
  console.log("property 2: " + objParam.age);
  console.log("property 3: " + objParam.stack);
}

// func(obj);

function func2({ fname, age, stack }) {
  console.log("property 1: " + fname);
  console.log("property 2: " + age);
  console.log("property 3: " + stack);
}

// func2(obj);
