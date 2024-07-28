console.log(`    
██████╗░░█████╗░██╗░░░██╗  ░░███╗░░░█████╗░
██╔══██╗██╔══██╗╚██╗░██╔╝  ░████║░░██╔═══╝░
██║░░██║███████║░╚████╔╝░  ██╔██║░░██████╗░
██║░░██║██╔══██║░░╚██╔╝░░  ╚═╝██║░░██╔══██╗
██████╔╝██║░░██║░░░██║░░░  ███████╗╚█████╔╝
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝░╚════╝░
`)

// ? ACTIVITY ONE : Basic Recursion 

// Task 1 :  Write a recursive function to calculate the factorial of a number and log the result

const factorial = ( number ) => {
    if( number <= 1 ) {
        return 1 ;
    }
    return number * factorial( number - 1 )
}

const fiveFactorial = factorial( 5 )
console.log(`The factorial of 5 is : ${fiveFactorial}`)

// Task 2 : Write a function to calculate the nth Fibonacci number. Log the result for few test case

const fibonacci = ( number ) => {
    if( number === 1 || number === 2 ) return number - 1 
    return fibonacci( number - 1 ) +  fibonacci( number - 2 ) 
}

const fibonacciOfFive = fibonacci( 5 )
console.log(`Fibonacii of five is : ${fibonacciOfFive}`)

const fibonacciOfTwenty = fibonacci( 20 )
console.log(`Fibonacci of 20 is : ${fibonacciOfTwenty}`)


// ? ACTIVITY TWO : Recursion with arrays

// Task 3 : Write a recursive function to find the sum of all elements in array. Log the result for few of testcases

function calculateSum( currentSum , array , index ){
    if(index === array.length){
        return currentSum
    }

    currentSum += array[index];
    
    return calculateSum( currentSum , array , ++index );
}

const sumOfFive = calculateSum( 0 , [ 1 , 2 , 3 , 4 , 5 ] , 0 );
console.log( `Sum of Array starting from 1 to 5 is : ${sumOfFive}` )

// Task 4 :  write a recursive function to find the maximum element in an array. Log the result

const findTheMaximumElement = ( array , index , max ) => {

    if( index === array.length ) return max

    if( max < array[index] ) max = array[index]

    return findTheMaximumElement( array , ++index , max )
}

const findTheMaximumElementOfSeven = findTheMaximumElement( [ 1 , 34 , 6 ,54 , 4521 , 134 , 5]  , 0 , 0 )
console.log(`The maximum element is : ${findTheMaximumElementOfSeven}`)

// ? ACTIVITY THREE :  String Manipulation with Recursion

// Task 5 : Write a recursive function to reverse a string. Log the result for few testcases

const reverseString = ( string ) => {
    if ( string.length <= 1 ) return string
    return string[ string.length - 1 ] + reverseString( string.slice( 0 , -1) )
}

const TestString = reverseString('AayushBhandari')
const TestStringTwo = reverseString('AmanDeep')

console.log( TestString , TestStringTwo )

// Task 6 : Write a recursive function to check if a string is pallindrome. Log the result

const checkPallindrome = ( string ) => {
    if( string[ string.length - 1 ] !== string[0] ) return false
    if( string.length <= 1 ) return true
    return checkPallindrome( string.slice( 1 , -1 ) )
}

const god = checkPallindrome('god')
const mam = checkPallindrome('mam')

console.log( god , mam )

// ? ACTIVITY FOUR : Recursive search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element.

const binarySearch = ( array , south , east , target ) => {
    if( south > east ){
        return -1;
    }
    
    let middleIndex = ( south + east ) / 2;

    if( array[ middleIndex ] === target){
        return middleIndex;
    }
    else if( array[ middleIndex ] < target){
        return binarySearch( array , middleIndex + 1 , east , target );
    }
    else{
        return binarySearch( array , south , middleIndex , target );
    }
}

const binarySearchArray = [ 2 , 4 , 5 , 6 , 7 , 9 , 10 ]
const searchSeven = binarySearch( binarySearchArray , 0 , binarySearchArray.length - 1 , 7 )
const searchEleven = binarySearch( binarySearchArray , 0 , binarySearchArray.length - 1 , 11 )
console.log( ` 7 : ${searchSeven} \n 11 : ${searchEleven}` )

// Task 8 : write a recursive function to count the occurrences of a target element in an array. Log the index of the target element.

const calculateTargetOccuranceCount = ( array , index , target , count ) => {
    if( array.length === index ) return count 
    if( array[index] === target ) count++
    return calculateTargetOccuranceCount( array , ++index , target , count )
}

const countArray = [ 1 , 4 , 4 , 5 , 63 , 242 , 7 , 7 , 4 , 4 ]
const calculateOccurance = calculateTargetOccuranceCount( countArray , 0 , 7 , 0 )
console.log(`The count is : ${calculateOccurance}`)