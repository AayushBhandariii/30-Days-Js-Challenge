export function greetUser( username ){
    return `Hello , ${username}`
}

export function sayBye( username ) {
    return `Bye bye , ${username}`
}

export function returnRandomNumber () {
    const randomNumber = Math.floor( Math.random() * 1 )
    return randomNumber
}



