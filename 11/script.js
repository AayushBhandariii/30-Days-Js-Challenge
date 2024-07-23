console.log(`
██████╗░░█████╗░██╗░░░██╗  ░░███╗░░░░███╗░░
██╔══██╗██╔══██╗╚██╗░██╔╝  ░████║░░░████║░░
██║░░██║███████║░╚████╔╝░  ██╔██║░░██╔██║░░
██║░░██║██╔══██║░░╚██╔╝░░  ╚═╝██║░░╚═╝██║░░
██████╔╝██║░░██║░░░██║░░░  ███████╗███████╗
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝╚══════╝
`)

// ? ACTIVITY ONE : Understanding Promises

// Task 1 : Create a promise that resolves with a message after 2 - second timeout & log the message to the console

const resolvedPromise = new Promise( ( resolve , reject ) => {
    setTimeout( () => resolve('Task 1 Promise Is Resolved') , 2000)
})
resolvedPromise.then( msg => console.log(msg)).catch( msg => console.log(msg) )

// Task 2 : Create a promise that rejects with a message after 2 - second timeout & handle the error using `.catch`

const rejectedPromise = new Promise( ( resolve , reject ) => {
   setTimeout( () => {
       let _true = 1 + 1
       if ( _true === 3 ) resolve( 'Task 2 Promise Is Successfully Resolved' )
       else reject( 'Task 2 Promise Is Rejected' )
   } , 2000 )
})

rejectedPromise.catch( err => console.log(err))


// ? ACTIVITY TWO : Chaining Promise

// Task 3 : Create a sequence of promise that simulate fetching data from a server.Chain the promise to log messages in specific order

const sequencedPromise = new Promise( ( resolve , reject ) => { 
    const res = fetch("https://api.github.com/users/AayushBhandariii")
    if( res ) resolve( res )
    else reject(`Task 3 promise got an error`)
} )

sequencedPromise.then( res => res.json() ).then( data => console.log(data.name) ).catch( errorMessage => console.log(errorMessage) )


// ? ACTIVITY FOUR : Using Async/Await

// Task 4 : Write a async function , that waits for a promise to resolve & log the resolved value

async function valueEqualsTwo( number_one , number_two ) {
    const data = await number_one + number_two
    return data === 2 ? console.log(`Task 4 : Promise Resolved`) : console.log(`Task 4 : Promise Rejected`)
}
console.log(`exiting!`)

valueEqualsTwo( 3 , 4 ) // reject
valueEqualsTwo( 1 , 1 ) // resolved

// Task 5 : Write a async function that handles rejected promise using try-catch block & logs the error message

async function getFreeApiData() {
    try {
        const response = await fetch(`https://api.freeapi.app/api/v1/public/randomusers`)
        const data = await response.json()
        if( data.success ) console.log(`success`)
        console.log(data.data.data[0].location.street.name)
    } catch ( err ) {
        console.log(err)
    }
}

const getUserData = getFreeApiData()
console.log( getUserData )

// ? ACTIVITY FOUR : Fetching Data from an Api

// Task 6 : Use a fetch api to get data from a public api & log the response data to the console using promises
fetch('https://api.freeapi.app/api/v1/public/randomusers').then( res => res.json() ).then( data => console.log( data.data.data[0].name.first ) ).catch( err => console.error(err) )

// Task 7 : Use a fetch api to get data from a public api & log the response data to the console using promises
async function fetchUserData(){
    const response = await fetch(`https://api.freeapi.app/api/v1/public/randomusers`)
    const data = await response.json()
    const userEmail = data.data.data[0].email
    console.log(userEmail)
}

fetchUserData()


// ? ACTIVITY FIVE : Concurrent Promises

// Task 8 : Use `Promise.all` to wait for multiple promises to resolve & log all their value

async function logAllPromise(){
const PromiseArray = [ sequencedPromise , fetchUserData , getFreeApiData ]
let [ sequencedResult , fetchedResult , freeApiResult ] = await Promise.all(PromiseArray)
console.log(`
Sequence Result : ${sequencedResult} ,
Fetched Result : ${fetchedResult} , 
freeApi : ${freeApiResult}    
`)
}

logAllPromise()

// Task 9 : Use `Promise.race` to log the value of the first promise that resolves multiple promise
const delayPromise = ( PromiseMessage , delay) => {
    
    return new Promise( ( resolve ) => {
    
    setTimeout(() => {
        resolve( PromiseMessage );
      }, delay);
    
    });
  };
  
  const promiseOne = delayPromise( "Promise One : resolved", 3000 );
  const promiseTwo = delayPromise( "Promise Two : Resolved", 1000 );
  const promiseThree = delayPromise( "Promise Three : Resolved", 2000 );
  
  Promise.race([ promiseOne , promiseTwo , promiseThree ])
    .then((result) => {
      console.log(`Promise One Result = ${result}`);
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });