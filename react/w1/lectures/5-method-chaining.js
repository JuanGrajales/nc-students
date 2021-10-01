// method chaining (split, reverse, join)
// reverse a string
let str = "nauJ";
let str2 = str[3] + str[2] + str[1] + str[0];
// console.log(str2);

let revArr = [1, 2, 3, 4];
// console.log(revArr.reverse());
// console.log(typeof revArr.join(""));

let strAsArr = str.split(""); // ["n", "a", "u", "J"]
let strArrRev = strAsArr.reverse(); // [ 'J', 'u', 'a', 'n' ]
let revStr = strArrRev.join(""); //"Juan"
// console.log(revStr);

let strReverse = str.split("").reverse().join("");
// console.log(strReverse);
