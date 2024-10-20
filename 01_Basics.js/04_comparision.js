
// all assignment operation : < , <= , > , >= , == , != .

// console.log(2 > 2);    O/p : true   // this is the best conversion  bcz of same datatype (2 > 1) both are same
// console.log(2 >= 2);   O/p : true
// console.log(2 < 2);    O/p : false
// console.log(2 <= 2);   O/p : fasle
// console.log(2 == 2);   O/p : false
// console.log(2 != 2);   O/p : true

// console.log( "2" > 1 );  // this is thw worst conversion bcz of different datatype ("2">1) both are different
// console.log( "02" > 1 );

console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// hint :-Plz Avoid this type of conversion  
// Always the value of clean code

// === (strict check) -> this will check value but also check the Datatype

console.log( "2" === 1); 
/*
    o/p is false 2 reason : 1) different datatype (String and number), 
    2) both are not equal to each other
 */
console.log( 2 === 2); // o/p is true 2 reasons : 1) same datatypes (both are number) , 2) both are equal to eachother
