// is it necessary?

const arr = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const combinedArr = arr.concat(arr2);
const combinedArr1 = [
  arr[0],
  arr[1],
  arr[2],
  arr[3],
  arr2[0],
  arr2[1],
  arr2[2],
  arr2[3],
];

// console.log(combinedArr);
// console.log(combinedArr1);

const arr3 = [1, 2, 3, 4];
const arr4 = [5, 6, 7, 8];
const arr5 = [5, 6, 7, 8];
const arr6 = [5, 6, 7, 8];
const combinedArr2 = [...arr3, ...arr4, ...arr5, ...arr6];

// console.log(combinedArr2);
