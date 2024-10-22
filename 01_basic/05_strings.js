const name = "Dhruv"
const RepoCount = 50
//console.log( name + RepoCount + " value");

// this is an old method that why, I will never recommended to use this syntax

// now in modern time we use Backtick, The benefit to use the Backtick is string Interpeletion .

console.log(`Hello my name is ${name} & my repoCount is ${RepoCount}`);

// we have another way to declare a string
const gameName = new String("Dhruv Patel") // in this i use new means i use Object
// console.log(gameName);

// if you want to read and learn more method then go to Browser console and type above const...
//methods:

//console.log(gameName[0]); // String have index value starts from 0 (ZERO)

// console.log(gameName.__proto__); // get more info goto Browser console

// console.log(gameName.length); // dot(.) is for extension
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)); // Used Position to find a character then i use chatAt() 
console.log(gameName.indexOf('P')); //Used character to find position then u use indexOf()

const newString = gameName.substring( 0 , 4 ) // 0 is start , 4 is ending (O/p :- Dhru)
console.log(newString);

const anotherString = gameName.slice( -9 , 4 ) // 4 is start , -8 is ending (O/p :- hru) (Direction :- <---)
console.log(anotherString);

const newStringOne = "   Dhruv    " // there was to many space so if i want to remove extra space then i use trim
console.log(newStringOne); // when trim is not applied 
console.log(newStringOne.trim()); // the trim is for remove all space in string 


const url = "https://hitesh.com/dhruv%20choudhary"

console.log(url.replace('%20', '-')) // i want to replace anythink from link then i use .replace() function

console.log(url.includes('dhruv')) // if i want to find is the word is available in the link then it print true 
console.log(url.includes('sundar'))// if i want to find is the word isn't available in the link then it print false 

console.log(gameName.split(' ')); // if i want to split any space into a - 