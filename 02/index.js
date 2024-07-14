console.log(`

██████╗░░█████╗░██╗░░░██╗  ██████╗░
██╔══██╗██╔══██╗╚██╗░██╔╝  ╚════██╗
██║░░██║███████║░╚████╔╝░  ░░███╔═╝
██║░░██║██╔══██║░░╚██╔╝░░  ██╔══╝░░
██████╔╝██║░░██║░░░██║░░░  ███████╗
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝
`)

// Defining Variables 

let number_one = 5
let number_two = 4

/*
ACTIVITY ONE : Arithmetic Operation
 */

// Task 1 : Write a program to add two numbers & log it to the console

let sum = number_one + number_two
console.log(`The sum is ${sum}`)

// Task 2 : Write a program to subtract two numbers & log the result to the console

let difference = number_one - number_two
console.log(`Difference : ${difference}`)

// Task 3 : Write a program to multiply Two numbers & log the result to the console

let multiplied_result = number_one * number_two
console.log(`Multiplied Output : ${multiplied_result}`)

// Task 4 : Write a program to divide two numbers & log the result to the console

let divison = number_one / number_two 
console.log(`Divison : ${divison}`)

// Task 5 : Write a program to find the remainder & log it to the console

let remainder = 3 % 9
console.log(`Remainder : ${remainder}`)

/*
ACTIVITY TWO : Assignment Operator
*/

// Task 6 : Use the `+=` operator to add a number to a variable & log it to the console

let additionAssignment = number_one += 4
console.log(`Addition Assignment : ${additionAssignment}`)

// Task 7 : Use the '-=' operator to subtract a number to a variable & log it to the console

let subtractionAssignment = number_one -= 2
console.log(`subtraction Assignment : ${subtractionAssignment}`)


/*
ACTIVITY THREE : Comparison Operator
*/

// Task 8 : Compare two numbers using '<' & '>'

let greatorValue = number_one > number_two
let leastValue = number_one < number_two
console.log(` > : ${greatorValue} & < : ${leastValue}`)

// Task 9 : Compare Two Numbers using '>=' & '<='

let equalGreator = 9 >= 8
let equalLeast = 8 <= 7

// Task 10 : Compare Two Numbers using '==' & '==='

let objectNumber = new Number(5)
let statement_one = number_one == objectNumber
let statement_two = number_one === objectNumber

console.log(` == : ${statement_one} | ===  ${statement_two}`)

/*
ACTIVITY FOUR : Logical Operators
*/

// Task 11 : By using '&&' operator , combine two condition and log the value to the console

let andOpreatorTrue = 5 > 4 && 9 > 8 
let andOpreatorFalse = 5 > 4 && 9 < 4 

console.log(` && [True] : ${andOpreatorTrue} | &&[False]: ${andOpreatorFalse}`)

// Task 12 : By using '||' operator , combine two condition & log the value to the console

let orOpreatorTrue = number_one > number_two || 5 < 3
let orOpreatorFasle = number_one < number_two || 5 < 3 

console.log(`||[True] : ${orOpreatorTrue} | ||[False] : ${orOpreatorFasle}`)

// Task 13 : Write a program using '!' operator

let notOperatorTrue = number_one != number_two
let notOperatorFalse = number_one != number_one

console.log(` !<True> : ${notOperatorTrue} | !<False> : ${notOperatorFalse}`)

/*
ACTIVITY FIVE : Ternary Operator
*/

// Task 14 : By Using Ternary Operator , Check if a number is Positive or Not

let ternaryNumber = -14

ternaryNumber = ternaryNumber > 0 ? console.log(`Positive`) : console.log(`negative`)
