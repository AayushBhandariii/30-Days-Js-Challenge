console.log(`
██████╗░░█████╗░██╗░░░██╗  ░█████╗░
██╔══██╗██╔══██╗╚██╗░██╔╝  ██╔══██╗
██║░░██║███████║░╚████╔╝░  ╚█████╔╝
██║░░██║██╔══██║░░╚██╔╝░░  ██╔══██╗
██████╔╝██║░░██║░░░██║░░░  ╚█████╔╝
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ░╚════╝░
  `);

// ACTIVITY ONE : Template Literals

// Task 1 : Use a template literal to create a string that includes variable of a person ( name , age )

let Name = "Aayush";
let Age = 14;
let string = `Hello ${Name} , You are ${Age} years old`;

console.log(string);

let multilineString = `-------
This is a 
MULTILINE STRING
------
`;

console.log(multilineString);

// ACTIVITY TWO : Destructuring

// Task 3 : Use Array Destructuring to extract the first & second element from the array of numbers & log it to the console

const NumericArray = [1, 2, 3, 4, 5];
const [firstElement, SecondElement] = NumericArray;
console.log(firstElement, SecondElement);

// Task 4 : Use Object Destructuring to extract the title & author from the book object & log it to the console

const Book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
};

const { title, author } = Book;
console.log(title, author);

// ACTIVITY THREE : Spread & rest operators

// Task 5 : Use the spread operator to create a new array that includes all the elements of existing array + additional elements & log it to the console

const AdditionalNumericArray = [...NumericArray, 6, 7, 8, 9];
console.log(`New array : ${AdditionalNumericArray}`);

// Task 6 : Use the rest operator in a function to accept arbitary number of arguments , sum them & return the result

function sum(...nums) {
  return nums.reduce((initial, final) => initial + final, 0);
}
console.log(sum(1, 35, 53, 94));

// ACTIVITY FOUR : Default Parameters

// Task 7 : Write a function that takes two parameters & return their product , the second parameter should have a default parameter of 1

const product = (integerOne, integerTwo = 1) => integerOne * integerTwo;

const productWithoutDefaultParameter = product(4, 3);
const productWithDefaultParameter = product(4);

console.log(`Product Without Default Parameters : ${productWithoutDefaultParameter}
Product With Default Parameters : ${productWithDefaultParameter} 
  `);

// ACTIVITY FIVE : Enhanced Object Literals

// Task 8 : Use enhanced object literals to create an object with method & properties & log it to the conolse

const username = "Aayush";
const userage = 14;

const user = {
  username,
  userage,
  displayUserDetails: function () {
    return `Username : ${this.username} , Age : ${this.userage}`;
  },
};

console.log(user);
console.log(user.displayUserDetails());

// Task 9 : Create an object with computed property names based on variables & log the object to the console

const gameName = "Game Name";
const gameType = "Game Type ";
const isPaid = "Paid";

const game = {
  [gameName]: "COD",
  [gameType]: "Shooter",
  [isPaid]: false,
};

console.log(game);
