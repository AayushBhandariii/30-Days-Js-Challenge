console.log(`
  
██████╗░░█████╗░██╗░░░██╗  ░█████╗░
██╔══██╗██╔══██╗╚██╗░██╔╝  ██╔═══╝░
██║░░██║███████║░╚████╔╝░  ██████╗░
██║░░██║██╔══██║░░╚██╔╝░░  ██╔══██╗
██████╔╝██║░░██║░░░██║░░░  ╚█████╔╝
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ░╚════╝░
  `)

// ACTIVITY ONE : Array creation & Access

// Task 1 : Create a array of numbers 1 to 5 & log it to the console

const NumericArray = [ 1 , 2 , 3 , 4 , 5 ] 
console.log(`Array : ${NumericArray}`)

// Task 2 : Access the first & last element of Array & log them in the console

const FirstElement = NumericArray[0]
const LastElement = NumericArray[NumericArray.length - 1]
console.log(`First Element : ${FirstElement}
Last Element : ${LastElement}   
`)

// ACTIVITY TWO : Array Methods [ Basic ]

// Task 3 : By using the `push` method , add a number to the end of the array & log the updated array

NumericArray.push(6)
console.log(`Updated Array [push] : ${NumericArray}`)

// Task 4 : By using the `pop` method , remove the last element of the array & log it to the console

NumericArray.pop()
console.log(`Updated Array [pop] : ${NumericArray}`)

// Task 5 : By using the `shit` method , remove the first element of the array & log the updated array

NumericArray.shift()
console.log(`Updated Array [shift] : ${NumericArray}`)

// Task 6 : By using the `unshift` method , add a new number to the beginning of the array & log it to the console

NumericArray.unshift(0)
console.log(`Updated Array [unshift] : ${NumericArray}`)


// ACTIVITY THREE : Array Methods [ indermediate ]

// Task 7 : By using the `map` method to create a new array where each number is doubled & log the new array

const doubledArray = NumericArray.map( number => number * 2 )
console.log(`Doubled Array < Map > : ${doubledArray}`)

// Task 8 : By using the `filter` method to create a new array with only even numbers & log the new array

const EvenArray = NumericArray.filter( number => number % 2 === 0 )
console.log(`Even Array < Filter > : ${EvenArray}`)

// Task 9 : By using the `reduce` method to calculate the sum of all numbers in the array & log it to the console

const SumArray = NumericArray.reduce( ( PreviousValue , CurrentValue ) => PreviousValue + CurrentValue , 0 )
console.log(`Sum Array < Reduce > : ${SumArray}`)

// ACTIVITY FOUR : Array Iteration

// Task 10 : By using `for` loop iterate over an array & log each element to the console

for( let index = 0; index < NumericArray.length ; index++ ) console.log(` Index : ${index} | Value : ${NumericArray[index]}`)

// Task 11 : By using `forEach` method , iterate over the array & log each element to the console

NumericArray.forEach( (number) => {
  console.log(`Number : ${number}`)
})

// ACTIVITY FIVE : Multi-Dimensional Arrays

// Task 12 : Create a two-dimensional array ( matrix ) & log entire array to the console

const matrix = [ [ 1 , 2 , 3 ] ,
                 [ 4 , 5 , 6 ] , 
                 [ 7 , 8 , 9 ] 
                ] ;

console.log(`Matrix : ${matrix}`)


// Task 13 : Access & log a specific element from the two-dimensional array

const specificElementFromMatrix = matrix[2][1]
console.log(`Specific Element : ${specificElementFromMatrix}`)