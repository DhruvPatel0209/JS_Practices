// There are 3 types in variables : Const, Let, Var

const accountId = 144335 // it will not be changed after declaring a variables also didn't declare in cruly Brackets {}
let accountEmail = "dhruv@gmail.com" // it will be change after declaration
var accountPassword = "212121" // it will be changed  after declaration
accountCity = "Surat" 

//accountId = 2 // NOT ALLOWED, when i used const then i will never change after declaring a variable

accountEmail = "dhr21@gmail.com"
accountPassword = "412412"
accountCity = "Vadodara"

/*
 Prefer not to use var
 because of issue in block scope and functional scope
*/

console.log(accountId) //it use to print a single variable then i will use this 

console.table( [accountId, accountEmail, accountPassword, accountCity] ) //If i want to print multiple values then i use this
