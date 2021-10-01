// filter
let filterArr = [1, 2, 3, 4, 5, 6];
let evenArr = [];
for (let i = 0; i < filterArr.length; i++) {
  if (filterArr[i] % 2 === 0) {
    evenArr.push(filterArr[i]);
  }
}

// console.log(evenArr);

let evenArr2 = filterArr.filter((number, index) => {
  // console.log(`current Index: ${index} number: ${number}`);
  return number % 2 === 0;
});

// console.log(filterArr);
// console.log(evenArr2);

let evenArr3 = filterArr.filter((number, index) => number % 2 === 0);

// console.log(evenArr3);

// map
let mapArr = [1, 1, 1, 2, 2, 2];
let doubleArr = [];
for (let i = 0; i < mapArr.length; i++) {
  doubleArr.push(mapArr[i] * 2);
}

let doubleArr2 = mapArr.map((number) => {
  return number * 2;
});

// console.log(doubleArr);
// console.log(doubleArr2);

// reduce
let reduceArr = [1, 1, 1, 2, 2, 2];
let sum = 0;
for (let i = 0; i < reduceArr.length; i++) {
  sum += reduceArr[i];
}

// console.log(sum);

let sum2 = reduceArr.reduce((accum, curr, index) => {
  console.log(`Index = ${index} accum = ${accum} curr = ${curr}`);
  return accum + curr;
}, 0);

// console.log(sum2);
// console.log(reduceArr);

// array method that mutates original array?
reduceArr.reverse();
// console.log(reduceArr);

// how to check if there is a duplicate name in an array before adding another name?
let names = [
  { name: "Juan", age: "26" },
  { name: "Jaime", age: "28" },
  { name: "Roy", age: "26" },
  { name: "Jess", age: "26" },
  { name: "Anwar", age: "26" },
  { name: "Jonathan", age: "25" },
];

let newName = {
  name: "Josh",
  age: "21",
};

const duplicates = names.filter((eachName) => {
  return eachName.name === newName.name;
});

// console.log(duplicates);

// js 0 === false 1> === true
if (duplicates.length === 0) {
  names.push(newName);
} else {
  // console.log("cannot add duplicate name");
}

if (duplicates.length) {
  // console.log("cannot add duplicate name");
} else {
  names.push(newName);
}
