const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//This is not a perfect way to combine 2 string and push() : adds value at last of an array
// marvel_heros.push(dc_heros) 

// console.log(marvel_heros);
// this is used to get the access of flash but this is not a good way to get the access
// console.log(marvel_heros[3][1]); 

// concat (concatination) : Used to combines 2 string 
// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros); // it was perfect to get the perfect array with the help og concat

//spread Operator 
//Big Difference b/w them, In concat only 2 string will combine but In Spread Operator more than 2 string will be combine
const allnewheros = [...marvel_heros, ...dc_heros]
// console.log(allnewheros);

//To Rare case this type of question comes
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7 [4, 5]]]

const real_another_array = another_array.flat(Infinity) 
//flat : used to get the proper Array Form 
console.log(real_another_array); // there was some issues

//gives answer in true or false answer Q :Is this an array? Ans: False not an array it's a string 
console.log(Array.isArray("Dhruv"));
console.log(Array.from("Dhruv")); // In .from means its comes in Array
console.log(Array.from({name: "Dhruv"})); // //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // returns a new array from a set of element
