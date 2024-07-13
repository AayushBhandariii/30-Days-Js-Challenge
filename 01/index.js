console.log(
  `

  ██████╗░░█████╗░██╗░░░██╗  ░░███╗░░
  ██╔══██╗██╔══██╗╚██╗░██╔╝  ░████║░░
  ██║░░██║███████║░╚████╔╝░  ██╔██║░░
  ██║░░██║██╔══██║░░╚██╔╝░░  ╚═╝██║░░
  ██████╔╝██║░░██║░░░██║░░░  ███████╗
  ╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝
  `
)


// ACTIVITY ONE : Variable Declaration

// Task one -> Declare a integer variable using the `var` keyword & log it into console

var int = 1
console.log( `Var :  ${int}` )

// Task two -> Declare a string variable using the `let` keyword & log it to the console

let str = "Aayush"
console.log( `Let : ${str} `)


/* ACTIVITY TWO : Constant Declaration

Task 3 -> Declare a variable using the `const` keyword & assign it to a boolean & log it to the console

*/

const isLoggedIn = true
console.log(isLoggedIn)

/* ACTIVITY THREE : Data Types

Task 4 -> Create variales of different Data Types [ number , string , boolean , array ]
& log each of them using the `typeof` opreator
*/

const Name = "Aayush Bhandari" // String 
const Age = 14 // Integer
const isStudent = true // Boolean
const id = Symbol( 314 ) // Symbol
const SchoolName = undefined // Undefined
const grades = null // null 

const introductionArray = [ Name , Age , isStudent , id , SchoolName , grades ] // Array
const introductionObject = {
  Name ,
  Age ,
  isStudent ,
  id ,
  SchoolName ,
  grades ,
}

console.log( typeof(Name) )
console.log( typeof(Age) )
console.log( typeof(isStudent) )
console.log( typeof(id) )
console.log( typeof(SchoolName) )
console.log( typeof(grades) )
console.log( typeof(introductionArray) )
console.log( typeof(introductionObject) )

/*

ACTIVITY FOUR : Reassigning Variable

Task Five : Declare a `let` variable , assign it an initial value , reassign it & log both of them

*/

let current_date = Date.now() // initial value
console.log( current_date )

current_date = Date.now() // reassigned value 
console.log( current_date )

/*

ACTIVITY FIVE : Understanding Constant

Try Reassigning a constant & observe the error

*/

const PI = 3.14
// PI = 3.15 // it throws an error
