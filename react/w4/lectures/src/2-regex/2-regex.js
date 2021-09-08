// sometimes you want to find parts (i.e. substrings) of a string

// example
let str = "bye";

// console.log(str.replace("b", "a")); // this prints "aye"
// but what if you have multiple 'b's not just one?
// this is where regex could come in handy

let str1 = "bbbbbbbye";
// console.log(str1.replace("b", "a"));

// regex syntax: /pattern/optionalFlags

// basic patern example
let regex = /b/;
let str2 = "bbbbbbbye";
// console.log(str2.replace(regex, "a"));

// global and case flag example
// what do the square brackets do?
let regex2 = /[ebyc]/gi;
let str3 = "BBbBbBbye";
// console.log(str3.replace(regex2, "a"));

// ^ means it starts with
// \d any digit from 0-9
// length between 1-6
// $ ends with
// put it all together: pattern starts with any digit from 0-9 and must end with a total of 1-6 digits
let regex3 = /^\d{1,6}$/;
let str4 = "123456";
console.log(regex3.test(str4));

// resources
// https://www.w3schools.com/js/js_regexp.asp
// https://www.rexegg.com/regex-quickstart.html
// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
