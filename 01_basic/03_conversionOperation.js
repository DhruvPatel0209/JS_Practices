// INVESTIGATION STUDY

let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Notes :
// variables => O/P
// "33"(number) => 33
//  "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLogged = Boolean(isLoggedIn)
console.log(booleanIsLogged);

//NOTES :
// 1 => true / 0 => false
// ""(empty) : false
// "Dhruv" : true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************************************* Operation *************************************

let value = 3
let negvalue = -value
console.log(negvalue);

// All Arithmetic Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// Example
let str1 = "Hello"
let str2 = " Dhruv"
let str3 = str1 + str2
console.log(str3);

// Do code clear and simple to understand dont make it complex

// console.log("1" + 2); // 1
// console.log(1 + "2"); // 2
// console.log("1" + 2 + 2 ); // 3
// console.log(1 + 2 + "2" ); // 4

// the compiler will run line by line
/*
    In 1st and 3rd statement, 1st is a string and then a number, so  compiler easily understand all are string then
    the compiler didn't perform addition and only print single number (1st : 12 , 3rd : 122) 
*/

/*
    In 4th statement, 1st and 2nd is a numbers and then a string, so compiler do addition b/w 1 and 2 so ans : 3
    then string so the answer is 32.
*/

//Prefix and Postfix

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

// Prefix
// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter); // O/p : 101

// Postfix
let gameCounter = 100
gameCounter++;
console.log(gameCounter); // O/p : 101