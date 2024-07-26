console.log(
    `
██████╗░░█████╗░██╗░░░██╗  ░░███╗░░░░██╗██╗
██╔══██╗██╔══██╗╚██╗░██╔╝  ░████║░░░██╔╝██║
██║░░██║███████║░╚████╔╝░  ██╔██║░░██╔╝░██║
██║░░██║██╔══██║░░╚██╔╝░░  ╚═╝██║░░███████║
██████╔╝██║░░██║░░░██║░░░  ███████╗╚════██║
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝░░░░░╚═╝
    `
)

// ? ACTIVITY ONE : Class Definition

// Task 1 : Define a class `person` with properties name , age & a method to return a gretting message , create an instance of the class & log the gretting message

class Person{

    constructor( name="Aayush" , age ) {
        this.name = name;
        this.age = age;

        this.firstNameIndex = name.indexOf(' ')
        this.firstName = name.slice( 0 , this.firstNameIndex + 1 )

        this.lastName = name.slice( this.firstNameIndex + 1 )

        }

    greetUser(){
        return `Hello ${this.name} , You are ${this.age} years old`       
    }

    // Task 2 Method

    updateAge(){
        return `Your age has been successfully updated to ${this.age}`
    }

    // Task 5 Method

    static genericGreeting(){
        return `Respected Sir/Maam ${this.name} , you are welcomed in our app`
    }

    // Task 7 : Getters

    getFirstName(){
        return this.firstName
    }

    getLastName(){
        return this.lastName
    }

    // Task 8 : Setters

    setFirstName( firstName ){
        this.firstName = firstName
        this.modifyName()
    }

    setLastName( lastName ) {
        this.lastName = lastName
        this.modifyName()
    }

    // Extra functions

    modifyName(){
        this.name = `${this.firstName} ${this.lastName}`
    }

    logName(){
        return `Name : ${this.name}`
    }
}

const Aayush = new Person( `Aayush Bhandari` , 14 )
const greetAayush = Aayush.greetUser()
console.log(greetAayush)

// Task 2 : Add a method to the person class that updates the age property & logs the updated age

Aayush.age = 12
console.log(Aayush.updateAge())


// ? ACTIVITY TWO : Class inheritance

// Task 3 : Define a `Student` class that extends `Person` class.Add a property student id & a method to return the student id , create an instance of student class & log the student id


const DemostudentId = Math.floor( Math.random() * 1500 )
class Student extends Person{

    static studentsCreated = 0 ; // for task 6

    constructor( name , age , studentId=DemostudentId ){
        super( name , age )
        this._studentId = studentId
        Student.studentsCreated++
    }
    
    greetUser(){
        return `Hello : ${this.name} , your student id is : ${this._studentId}`
    }
}

const Aayushv2 = new Student( "Axy" , 27 , 1993)
const randomUser = new Student( "xa" , 37)

console.log( Aayushv2._studentId , randomUser )

// Task 4 : Override the greeting method in the student class to include the student id
console.log( Aayushv2.greetUser() , randomUser.greetUser() )


// ? ACTIVITY THREE : Static Methods & Properties

// Task 5 : Add a static method to the `Person` Class that returns a genericGreeting message.Call this static method without creating an instance of the class

console.log(Person.genericGreeting())

// Task 6 : Add a static property to the `Student` class to keep track of the students created.Increment this property in the constructor & log the number of students 

console.log( `Students Created : ${Student.studentsCreated}`)


// ? ACTIVITY FOUR : Getters & Setters

// Task 7 : add a getter method in `Person` class to get firstname & lastname of user

console.log(Aayush.getFirstName())
console.log(Aayush.getLastName())

// Task 8 : add a setter method in `Person` class to update the name properties 

Aayush.setFirstName( "Updated Aayush" )
Aayush.setLastName( "Updated Bhandari")

const fullName = Aayush.logName()
console.log( fullName )


// ? ACTIVITY FIVE : Private Fields

// Task 9 : Define a class `Account` with private fields for balance & a method to deposit or withdraw money , ensure that balance can be only updated through these methods

class Account{

    #AccountBalance;

    constructor( name , id , balance=100 ){
        this._name = name
        this._id = id
        this.#AccountBalance = balance
    } 

    setDepositedAmount( depositedAmount ){
        this.#AccountBalance += depositedAmount
    }

    setWithdrawnAmount ( withdrawAmount ){
        this.#AccountBalance -= withdrawAmount
    }

    getAccountBalance(){
        return `Account balance : ${this.#AccountBalance}`
    }

}

// Task 10 : Create an instance of account class & test all the methods

const aayushBankAccountData = new Account( `Aayush` , 3134 , 500 )
console.log( aayushBankAccountData.getAccountBalance() )

const depositAmount = aayushBankAccountData.setDepositedAmount( 200 )
console.log( aayushBankAccountData.getAccountBalance() )

const withdrawAmount = aayushBankAccountData.setWithdrawnAmount( 300 )
console.log( aayushBankAccountData.getAccountBalance())