console.log(`
██████╗░░█████╗░██╗░░░██╗  ███████╗
██╔══██╗██╔══██╗╚██╗░██╔╝  ██╔════╝
██║░░██║███████║░╚████╔╝░  ██████╗░
██║░░██║██╔══██║░░╚██╔╝░░  ╚════██╗
██████╔╝██║░░██║░░░██║░░░  ██████╔╝
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚═════╝░
`)

// ACTIVITY ONE : Function Declaration

// Task 1 : Write a function to check if a number is even or odd & log it to the console

function checkOddOrEven( number ) {
 if( typeof(number) !== "number" ){
  return "Enter a number"
 }
 return number % 2 === 0 ? "Even" : "Odd"
}

const evenNumber = checkOddOrEven( 2 )
const oddNumber = checkOddOrEven ( 3 )
const noNumber = checkOddOrEven("not a number")
console.log(`2 : ${evenNumber} \n3 : ${oddNumber}`)


// Task 2 : Write a function to calculate the square of number & log it to the console

function calculateSquare( number ) {
  if( typeof(number) !== "number" ) {
    return "Enter a number"
  }
  return number ** 2
}

const fourSquare = calculateSquare(4)
const sixSquare = calculateSquare(6)
const noSquare = calculateSquare("A")

console.log(`4 : ${fourSquare} \n6 : ${sixSquare} \nA : ${noSquare} `)

// ACTIVITY TWO : Function Expression

// Task 3 : Write a function to find the maximum of two numbers & log it to the console

function getMaximumNumber( numberOne , numberTwo) {
  if(typeof(numberOne) !== "number" && typeof(numberTwo) !== "number") return "Invalid Number"
  return numberOne > numberTwo ? `${numberOne} is greater` : `${numberTwo} is greater`
}

const comparisonOne = getMaximumNumber( 3 , 4) 
const comparisonTwo = getMaximumNumber( 7 , 5)

console.log(`Comparison One : ${comparisonOne} \nComparison Two : ${comparisonTwo}`)

function concatenateTwoString( stringOne , stringTwo ){
  stringOne = String(stringOne) 
  stringTwo = String(stringTwo)
  return stringOne.concat(stringTwo)
}

const fullName = concatenateTwoString('aayush','lastname')
const programmingLanguage = concatenateTwoString('java','script')

console.log(`Full name : ${fullName} \nlang : ${programmingLanguage}`)

// ACTIVITY THREE : Arrow Function

// Task 5 : Write a arrow function to calculate the sum of two numbers

const calculateSum = ( numberOne , numberTwo ) => { return numberOne + numberTwo }

// Task 6 : Write a arrow function to check if a string contains specific character or not ( if true then return boolean )

const checkSpecificCharacter = ( word , specificCharacter ) => {
  if(word.includes(specificCharacter)){
    return true 
  }
  return false
}

const sum = calculateSum( 5 , 9 )
const gmailValidation = checkSpecificCharacter("aayush@gmail.com" , "@gmail.com")
console.log(`sum : ${sum} \ncontains specific character : ${gmailValidation}`)

// ACTIVITY FOUR : Function parameters and default values

// Task 7 : Write a function that takes two parameters & return their product [ provide default value for second parameter ]

function returnProduct( integerOne , integerTwo=2 ) { 
  if( typeof(integerOne) !== "number" ) return "please provide a numeric value"
  return integerOne * integerTwo
}

const FourProduct = returnProduct(4 , 3)
const FourProductDefault = returnProduct(4)
const noProduct = returnProduct("X")

console.log(`4 * 3 : ${FourProduct} \n4 [Default] : ${FourProductDefault} \nNo Product : ${noProduct}`)

function greetUser( userName , userAge=18 ) {
  if(typeof(userAge) !== "number") return "Enter a number"
  return `Hello ${userName} , you are ${userAge} years old`
}

const greetAayush = greetUser("Aayush" , 3)
const greetAayushDefault = greetUser("Aayush")
console.log(`${greetAayush} \n${greetAayushDefault}`)

// ACTIVITY FIVE : Higher Order Function

// Task 9 : Write a higher order function that takes a function & a number & calls the function that many times 

const callFunction = ( func , count ) => {
  for( let index = 0 ; index < count ; index++ ){
    func()
  }
}

function functionOne( ){
  console.log(`hi`)
}

const sayHi = callFunction( functionOne , 3 )
console.log(sayHi)

// Task 10 : Write a higher order function that takes two function & a value , applies the first function to the value , the applies the second function to the result

const displayAnswer = value  => { return `Answer : ${value}`}

const findProduct = ( func , funcTwo , value) => {
  let result = func(value)
  if( result ) {
   let output = funcTwo( result )
   return output
  }
  return 'an error occured'
}

const ProductOf6 = findProduct( returnProduct , displayAnswer , 6 )
console.log(ProductOf6)