console.log(`

██████╗░░█████╗░██╗░░░██╗██████╗░
██╔══██╗██╔══██╗╚██╗░██╔╝╚════██╗
██║░░██║███████║░╚████╔╝░░█████╔╝
██║░░██║██╔══██║░░╚██╔╝░░░╚═══██╗
██████╔╝██║░░██║░░░██║░░░██████╔╝
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═════╝░
`)


/*
ACTIVITY ONE : If-Else Statement 
*/

// Task 1 : Check is a number is Positive , Negative or zero & log it to the console

let number = 0;

if ( number > 0 ) console.log('Positive')
else if ( number < 0 ) console.log('Negative')
else console.log('zero')

// Task 2 : Check if a person age is eligible for voting & log it to the console

let age = 18 

if ( age >= 18 ) console.log('eligible')
else console.log( 'not eligible' )


/*
ACTIVITY TWO : Nested If-Else Statements
*/

// Task 3 : Write a program to find the largest of three numbers using nested-if else 

let numberOne = 14 
let numberTwo = 27 
let numberThree = 31
let largestNumber;

if ( numberOne > numberTwo ) {
  if ( numberOne > numberThree ) {
       largestNumber = numberOne
  } else {
    largestNumber = numberThree
  }
} else {
  if ( numberTwo > numberThree ) {
    largestNumber = numberTwo
  } else {
    largestNumber = numberThree
  }
}
console.log(largestNumber)

/*
ACTIVITY THREE : Switch Case  
*/

// Task 4 : By using switch case , write a program to determine the day of the week based on number & log it 

let day;
let day_number = 3
// day_number = 31 

switch ( day_number ) {
  case 1 :
    day = "Sunday"
    break; 
  case 2 : 
    day = "Monday"
    break;
  case 3 :
    day = "Tuesday"
    break;
  case 4 :
    day = "Wednesday"
    break;
  case 5 :
    day = "Thursday"
    break;
  case 6 :
    day = "Friday"
    break; 
  case 7 :
    day = "Saturday"
    break; 
  default :
    day = `${day_number} it not a day`
    break
}
console.log(day)

// Task 5 : By Using Switch Case , write a program that assign grades based on score

let grade;
let score = 98

switch ( true ) {
  case ( score >= 90 && score <= 100 )  :
    grade = "A"
    break;
  case ( score >= 80  && score <= 90 ) : 
    grade = "B"
    break
  case ( score >= 70 && score <= 80 ):
    grade = "C"
    break
  case ( score >= 60 && score <= 70 ):
    grade = "D"
  case ( score >= 50 && score <= 60 ) :
    grade = "F"
    break
  default:
    grade = "Non Gradeable"
    console.log(score)
    break;
}
console.log(grade)

/*
ACTIVITY FOUR : Ternary Operator
*/

// Task 6 : By using ternary operator check if a number is odd or even 

let ternaryNumber = 4 
ternaryNumber = 3
let ternaryOutput;
ternaryNumber = ternaryNumber % 2 === 0 ? ternaryOutput = "Even" : ternaryOutput = "Odd"
console.log(ternaryOutput)


/*
ACTIVITY FIVE : Combining Condition
*/

// Task 7 : By using multiple condition write a program that checks if the given year is leap or not

let year = 2023
let leapYear;

if( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ) {
  leapYear = "Yes"
}else {
  leapYear = "No"
}
console.log( leapYear )
