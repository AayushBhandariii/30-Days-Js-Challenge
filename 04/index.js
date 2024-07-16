console.log(
  `
  
██████╗░░█████╗░██╗░░░██╗  ░░██╗██╗
██╔══██╗██╔══██╗╚██╗░██╔╝  ░██╔╝██║
██║░░██║███████║░╚████╔╝░  ██╔╝░██║
██║░░██║██╔══██║░░╚██╔╝░░  ███████║
██████╔╝██║░░██║░░░██║░░░  ╚════██║
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ░░░░░╚═╝
`
)

/*
ACTIVITY ONE : For Loop
*/

// Task 1 : Write a for-loop to print numbers from 1 to 10

for( let index = 0 ; index <= 10 ; index++ ) {
  console.log(`index : ${index}`)
}

// Task 2: Write a For loop to print the multiplication table of 5 

for( let index = 0 ; index <= 10 ; index++  ){
  console.log(`5 * ${index} = ${ 5 * index }`)
}

/*
ACTIVITY TWO : While Loop
*/

// Task 3 : Write a program to calculate the sum of numbers from 1 - 10 using a while loop

let index = 1;
let sum = 0
while( index <= 10){
  sum += index
  console.log(sum) 
  index++
}

// Task 4 : Write a program to print numbers from 10 to 1 using a while loop

let count = 10 

while( count >= 1){ 
  console.log(`The current Count is : ${count}`) 
  count--
}

/*
ACTIVITY THREE : Do While Loop
*/

// Task 5 : By using do-while loop , write a program to print numbers from one to five

let doWhileCount = 0

do{
  console.log(`Count : ${doWhileCount}`)
  doWhileCount++
}while(doWhileCount <= 5)

// Task 6 : By using do while loop write a program to calculate the factorial of a number 

function factorial( number ) {
  let factorialNumber = 1 
  let index = number 
  
  do {
    factorialNumber *= index
    index--
  }while( index > 0 )
    
    console.log(`${factorialNumber}`)
  }
  let factorialNum = 5

factorial( factorialNum )

/*
ACTIVITY FOUR : Nested For-Loop
*/

// Task 7 : By using nested for-loop , print a pattern

let patternCount = 8
for( let index = 0 ; index <= patternCount ; index++){
  let iPattern = ''
  let jIndex = 1
  for( jIndex ; jIndex <= index ; jIndex++ ){
    iPattern += "*"
  } 
  console.log(`${iPattern}`)  
}

/*
ACTIVITY FIVE : Loop Control Statements
*/

// Task 8 : Write a program to print numbers from 1 - 10 , but skip the number 5

for ( let index = 0 ; index <= 10 ; index++ ) {
  if( index === 5 ) continue
  console.log(`index : ${index}`)
}

// Task 9 : Write a program to print numbers from 1 - 10 , but stop the loop at 7

for ( let index = 0 ; index <= 10 ; index++ ){
  console.log(`index : ${index}`)
  if( index === 7 ) break
}