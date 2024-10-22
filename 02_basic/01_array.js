//array

myArr = [0, 1 , 2, 3, 4, 5] // O/p : [ 0, 1, 2, 3, 4, 5 ]

const myheros = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // this is an another way to declare array
// console.log(myArr[1]);

//Array Method

// myArr.push(6) // Used to add new value in array
// myArr.push(7) // Used to add new value in array
// myArr.pop() // Used to remove a value form array
// console.log(myArr); 

myArr.unshift(9)
// console.log(myArr);

myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(myArr); // [0,1,2,3,4,5]
// console.log(newArr); // 0,1,2,3,4,5
// console.log(typeof newArr); // String

//Slice , Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) // 1 to 3 number in index value will sperate
console.log("C", myArr);
console.log(myn2);