// this is for knowledge (this type of things ask in interviews)
// Datatypes are divided in 2 parts :- Primitive and Non-Primitive Datatypes

// jS is Which type of language Static and Dynamic key type language
// Answer is Dynamic key type Language

// Primitive :
// there are 7 types : String , number , Boolean , null, undefined, Symbols, bigInt

// We never define language in JS 
const score = 100 // it is a number
const scoreValue = 100.3 // it is also a number (decimal ma bhi chale)

const isLoggedIn = false
const OutsideTemp = null     // its Datatype is object
let useremail; // this is a undefined if i dont give a value 
let userEmail = undefined; // if i write this then also it was undefined , both are same anythink you want to write
// both is correct

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false is O/p

// const bigNumber = 12345678900987654321n      // its Datatype is undefined. 


// Reference (Non primitive) 
// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Dhruv" , // inside this cruily bracket that was an Object 
    age: 18  // Datatype was anything number, string, boolean etc.
}

const myfunction = function() {
    console.log("Hello Dhruv");
    
}

//if i want to know what is the datatype of that then i type this.

// console.log( typeof bigNumber); // Datatypes :- undefined
// console.log( typeof OutsideTemp); // Datatypes :- Object
// console.log( typeof undefined); // Datatypes :- undefined
// console.log( typeof myfunction); // Datatypes :- function
// console.log( typeof heros); // Datatypes :- Object
// console.log( typeof anotherId); // Datatypes :- Symbols

// ************************************* STACK AND HEAP ***************************************


// there are 2 types of memory : stack and Heap

// Stack (Primitive) , Heap (Non-Primitive)
// everywhere in Primitive we use Stack ,  everywhere in Non-Primitive we use Heap
//when we used Stack memory then we get declared variables copy 
//when it define in Heap then we get the Reference of original value

// Stack
let myYoutubename = "DhruvPatelJS.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


//Heap

let userOne = {             // functions
    email: "Dhruv@google.com",  // object
    upi: "user@ubi"
}

let userTwo = userOne

userTwo.email = "Dhruv12@gmail.com"  // we use to userTwo but for access we use dot(.) to get email access

console.log(userOne.email); // we get the same email bcz of Heap bcz Heap gives Reference that why 
console.log(userTwo.email); // we get the same email