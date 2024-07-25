import { addNumber } from './addNumberModule.js'
import { person } from './personModule.js'
import { greetUser , returnRandomNumber , sayBye } from "./functions.js"
import defaultFunction from './deafultFunction.js'
import * as hiteshSir from './hiteshSir.js'
import _ from 'lodash' // importing lodash
import axios, { Axios } from 'axios'


console.log(`
██████╗░░█████╗░██╗░░░██╗  ░░███╗░░██████╗░
██╔══██╗██╔══██╗╚██╗░██╔╝  ░████║░░╚════██╗
██║░░██║███████║░╚████╔╝░  ██╔██║░░░█████╔╝
██║░░██║██╔══██║░░╚██╔╝░░  ╚═╝██║░░░╚═══██╗
██████╔╝██║░░██║░░░██║░░░  ███████╗██████╔╝
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝╚═════╝░
`)

// ? ACTIVITY ONE : Creating & Exporting Modules

// Task 1 : Create a module , that adds two numbers.Import & use this module in another script [ module location : ./addNumberModule.js ]

const addFour = addNumber(4,4)
console.log( addFour )
 
// Task 2 : Create a module that exports an object representing a person with properties & method , import & use this module in another script [ module location : ./personModule.js ]

console.log(`Person Object : ` , person ) // ? logs the entire object
console.log( `Person Name : ${person.name}` ) //? logs the object name
console.log( `Person Social Media Details : ` , person.displayUserSocialMediaDetails() ) //? executes the given function
console.log( `Person Age Verification : ` , person.verifyAge() ) 


// ? ACTIVITY TWO : Named & Default Exports

// Task 3 : Create a module that exports multiple functions using name exports , import & use these functions in another script [ module location : ./functions.js ]

const randomNumber = returnRandomNumber()
const greetAayush = greetUser( `aayush` )
const sayByeToAayush = sayBye( `aayush` )

console.log(`Random Number : ${randomNumber}
Greeting : ${greetAayush},
Saying Bye : ${sayByeToAayush}    
`)

// Task 4 : Create a module that exports a single function using default export , import & use these function in another script [ module location : ./defaultFunction.js ]

console.log( defaultFunction() )


// ? ACTIVITY THREE : Importing Entire Modules

// Task 5 : Create a module that exports multiple constant & functions , import the entire module as object & use its properties

console.log(hiteshSir.hiteshSir)
console.log(hiteshSir.hiteshSir.portfolio)
console.log(hiteshSir.getHiteshSirSocials())


// ? ACTIVITY FOUR : Using A Third Party Module

// Task 6 : Install a third-party module ( e.g  lodash ) using npm , import & use a function from this module in a script

const numbers = [ 1 , 2 , 7 , 3 , 4 , 5]
console.log( _.head( numbers ) )

// Task 7 :  Install a third-party module ( e.g  axios ) using npm , import & use this function to make a network request in a script

async function getGithubFollowersCount ( username ) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`)
        console.log(`Github Followers : ${response.data.followers}`)
    } catch (error) {
        throw new Error(error)
    }
}

const getAayushFollowersCount = getGithubFollowersCount( "AayushBhandariii" )
console.log(getAayushFollowersCount)