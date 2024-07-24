console.log(`
██████╗░░█████╗░██╗░░░██╗  ░░███╗░░██████╗░
██╔══██╗██╔══██╗╚██╗░██╔╝  ░████║░░╚════██╗
██║░░██║███████║░╚████╔╝░  ██╔██║░░░░███╔═╝
██║░░██║██╔══██║░░╚██╔╝░░  ╚═╝██║░░██╔══╝░░
██████╔╝██║░░██║░░░██║░░░  ███████╗███████╗
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝╚══════╝
`)

// ? ACTIVITY ONE : Basic Error Handling with Try-Catch

// Task 1 : Write a function that intentionally throws error & use a try-catch block to handle the error & log an appropriate message to the conosle

const logErrorMessage = () => {
    try {
        throw new Error(`This is an intentional error`)
    }catch ( error ) {
        return error
    }
}

const errorMessage = logErrorMessage()
console.log(errorMessage)

// Task 2 : Create a function that divides two numbers & throws an error if denominator is zero.Use a try catch block to handle this error

const divideTwoNumber = ( number_one , number_two ) => {
    try{
       if( number_one % number_two === 0 ){
            throw new Error(`Denominator is zero`)
       }else{
            return `${number_one} % ${number_two} doesnt give denominator zero`
       }
    }catch( err ){
        return err
    } 
}

const divideTwoNumberOne = divideTwoNumber( 4 , 2 )
const divideTwoNumberTwo = divideTwoNumber( 4 , 3 )
console.log( divideTwoNumberOne )
console.log( divideTwoNumberTwo )


// ? ACTIVITY TWO : Finally Block

// Task 3 : Write a script that includes a try-catch block & a finally block , log the message in try-catch & finally to observer the execution flow

const finallyBlock = ( num ) => {
    try {
        const value = 3
        if( num !== 3 ) {
            throw new Error(`Number needs to be 3`)
        }else{
            return `value is 3`
        } 
    } catch (error) {
        return error
    }finally{
        return `Finally block executed`
    }
}

const finallyBlockOne = finallyBlock( 3 )
const finallyBlockTwo = finallyBlock( 2 )
console.log(finallyBlockOne)
console.log(finallyBlockTwo)


// ? ACTIVITY THREE : Custom error object

// Task 4 : Create a custom error class that extends built-in error class.Throw an instance of this custom error in a function & handle it using a try-catch block'

class loadingFailedError extends Error{
    constructor( errorMessage ){
        super( errorMessage )
        this.name = `loaderError`
    }
}

const loadData = () => {
    try {
        throw new loadingFailedError(`Custom Error Executed`)
    } catch (error) {
        return error.message
    }
}

const loadWebsiteData = loadData()
console.log(loadWebsiteData)

// Task 5 : Write a function that validates user input ( eg : checking if the string isnt empty ) & throws a custom error if validation fails.Handle the custom error using try-catch block

class validationError extends Error{
    constructor( message ) {
        super( message )
        this.name = `validationErrors`
    }
}

const validate = (str) => {
    
    if( str.length == 0 ) {
        throw new validationError(`string cant be empty`)
    }
    return `Validation Completed`

}

try{
    const validationTest = validate("")
    console.log(validationTest)
}catch( error ) {
    console.log(error.message)
}


// ? ACTIVITY FOUR : Error Handling in Promises

// Task 6 : Create a promise that randomly resolves or rejects. Use .catch() to handle rejection & log a message to the console

const randomPromise = new Promise( ( resolve , reject ) => {
    const randomNumber = Math.floor( Math.random() * 1 )
    if( randomNumber === 1 ) resolve(`Random Number is 1`)
    reject(`Random Number should be 1`)
} )

randomPromise.then( message => console.log(message) ).catch( err => console.log(err) )

// Task 7 : Use try-catch within async function to handle error from promise that randomly resolves or reject , & log the error message to console

async function handleRandomPromise() {
    try {
        const promise = await randomPromise
        console.log(promise)
    } catch (error) {
        console.log(error)
    }
}

handleRandomPromise()


// ? Graceful error handling with fetch

const randomUrl = `https://thisissucharandomurlchaicode.com`

// Task 8 : Use the fetch api to request data from an invalid url & handle the error using `.catch()` & log the message to console

fetch( randomUrl ).then( res => res.json() ).then( data => data.name).catch( err => console.log( `Error` , err ) )

// Task 9 :  Use the fetch api to request data from an invalid url within an async function & handle the error using try-catch & log the message to console 

async function handleInvalidUrl(){
    try {
        const res = await fetch( randomUrl )
        const data = res.json()
        return data.name
    } catch (error) {
        console.log(`We have got an error which is : ${error.message}` )
    }
}
handleInvalidUrl()