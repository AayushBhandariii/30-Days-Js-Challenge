console.log(`
██████╗░░█████╗░██╗░░░██╗  ░░███╗░░███████╗
██╔══██╗██╔══██╗╚██╗░██╔╝  ░████║░░██╔════╝
██║░░██║███████║░╚████╔╝░  ██╔██║░░██████╗░
██║░░██║██╔══██║░░╚██╔╝░░  ╚═╝██║░░╚════██╗
██████╔╝██║░░██║░░░██║░░░  ███████╗██████╔╝
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝╚═════╝░
`)

// ? ACTIVITY ONE : Understanding Closures

// Task 1: Write a function , that returns another function where the inner function accesses a variable from the outer function scope , call the inner function & log the result

const outerFunction = () => {
    const outerScope = `You are in outer scope`
        const innerFunction = () => {
            console.log( outerScope )    
        }
    innerFunction()
}

outerFunction()

// Task 2 : Create a clousure that maintains a private counter , implement the function to increment & get the current value of closure

const counter = () => {
    let count = 0;
    return {
        increment : () => {
            count++
        },
        getValue : () => {
            return count
        }
    }
}

const Counter = counter()
console.log(Counter)
Counter.increment()
Counter.increment()
console.log(Counter.getValue())


// ? ACTIVITY TWO : Practical Closures

// Task 3 : Write a function that generates a new id , use a closure to keep track of the last generated id & increment it with each call

function generateID(){
    let id = Math.floor( Math.random() * 1400 )
    function increment(){
        id++
        return id
    }
    return increment
}

let newID = generateID()
console.log( newID() )
console.log( newID() )
console.log( newID() )


// Task 4 : Create a closure that captures users name & returns a function that greets the user by its name

function greetUser( username ){
    return function greet(){
        return `Hello ${username}`
    }
}

const greetAayush = greetUser( `Aayush` )
console.log( greetAayush() )


// ? ACTIVITY THREE : Closures in Loops

// Task 5 : Write a loop , that creates a array of function , each function should log its index when called , use closure to ensure each function logs the correct index

let func = []
for( let index = 0 ; index < 10 ; index++ ){
    func.push( function( index ) {
        return function(){
            console.log( index )
        }
    } (index) )
}


func[ 0 ]()
func[ 1 ]()


// ? ACTIVITY FOUR : Module patterns

// Task 6 : Use a closure to create a simple module for managing collection of items.Implements method to add , remove & list items

function manageItems(){
    let items = []

    return {
        addItem : ( item_name ) => {
            if( items.includes(item_name) ){
                console.log(`item is already added`)
            }
            items.push( item_name )
        } ,

        removeItem : ( item_name ) => {
            const index = items.indexOf( item_name )
            if ( index > -1 ){
                items.splice( index , 1 )
                console.log(`${item_name} has been removed !`)
            } else console.log( `item not found` )
        },

        listItems : () => {
            for( let itemIndex = 0 ; itemIndex < items.length ; itemIndex++ ) {
                console.log( `${itemIndex} : ${items[ itemIndex ]}` )
            }
        }

    }
}

const gameInventory = manageItems()
gameInventory.addItem( `Shotgun` )
gameInventory.addItem( `Shotgun` )
gameInventory.addItem( `Bucket` )
gameInventory.addItem( `Ammo` )

gameInventory.listItems()
gameInventory.removeItem( `Ammo` )
gameInventory.listItems()


// ? ACTIVITY FIVE : Memoization

// Task 7 : Write a function that memoizes the result of another function , use a closure to store the results of previous computations

function memoize( func ) {
    let cache = {};
    return function(...args){
        const key = JSON.stringify ( args )
        
        if ( cache[key] !== undefined ) {
            return cache[key]
        } else {
            const result = func( ...args )
            cache[key] = result 
            return result
        }

    }
}

// Task 8 : Create a memoized version of a function that calculates factorial of a number

function factorial ( number ) {
    
    if( number <= 1 ){
        return 1
    }

    return number * factorial( number - 1 )
}

const memoizeFactorial = memoize( factorial )
console.log( memoizeFactorial(3) )
console.log( memoizeFactorial(3) )
console.log( memoizeFactorial(9) )