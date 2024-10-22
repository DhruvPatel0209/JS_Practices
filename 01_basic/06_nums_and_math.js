const score = 400 
// console.log(score);

const balance = new Number(100) // in this i am conform to get the number only
// console.log(balance); // O/p :- [Number : 100]

// console.log(balance.toString()); // O/p :- String (it already become a string)
// console.log(balance.toString().length); //O/p :- 3
// console.log(balance.toFixed(2)); // O/p :- 100.00
// Used in ecom website only this will print 2 decimals number 
//it's my choice, how much number i want to print after decimal point

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); // this is a toPrecision means it will help to show how much value show in O/p
// console.log(otherNumber.toPrecision(3)); 
// console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// ********************************* Maths **************************************************

// console.log(Math);
// console.log(Math.abs(-4)); // used to convert negative value to positive but not converting positive to negative 
// console.log(Math.round(4.6)); // this will converting decimal to round value (Eg:- 4.6 => 5)
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2)); // In this ceil means always take a max value (eg:- 4.2 => 5)
// console.log(Math.floor(4.9)); // In this floor means always take a min value (eg:- 4.9 => 4)
// console.log(Math.min(4, 8 ,2, 6));
// console.log(Math.max(4, 8 ,2, 6));

console.log(Math.random()); // Always it's value comes in 0 to 1
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*10) + 1);