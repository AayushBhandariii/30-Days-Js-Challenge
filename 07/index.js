console.log(`
██████╗░░█████╗░██╗░░░██╗  ███████╗
██╔══██╗██╔══██╗╚██╗░██╔╝  ╚════██║
██║░░██║███████║░╚████╔╝░  ░░░░██╔╝
██║░░██║██╔══██║░░╚██╔╝░░  ░░░██╔╝░
██████╔╝██║░░██║░░░██║░░░  ░░██╔╝░░
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ░░╚═╝░░░
  `)

// ACTIVITY ONE : Object Creation & Access

// Task 1 : Create an object representing a book with properties like title , year , author & log it to the console

const Book = {
  title : "Atomic Habits",
  author : "James Clear",
  year : 2018,
}

console.log(`Book : ${Book}`)

// Task 2 : Access the title & author property of book & log it to the console

const BookTitle = Book["title"]
const BookAuthor = Book["author"]

console.table([ { title : BookTitle , author : BookAuthor } ])

// ACTIVITY TWO : Object Methods 

// Task 3 : Add a method to the book that returns a string with the book's title & author & log the result of calling method

Book.displayData = () => {
  const Data = `Title : ${Book["title"]} \n Author : ${Book["author"]}`
  return Data
}

const AtomicHabitsData = Book.displayData()
console.log(AtomicHabitsData)

// Task 4 : Add a method to the book object that takes the `year` parameter & updates the book year property , then log the updated object

Book.updateYear = year => Book["year"] = year

const revisedEdition = Book.updateYear(2021)

console.log(Book)

// ACTIVITY THREE : Nested Objects

// Task 5 : Create a nested object representing a library with properties like name & books [ array of books object ] etc & log it to the console

const Library = {
  LibraryName : "ChaiCode Library",
  founder : "Hitesh Choudhary",
  AvailableBooks : [
    {
      title : "JavaScript in One Shot",
      year : 2020,
    },
    {
      title : "Python in One Shot",
      year : 2024,
    },
    {
      title : "Django in One Shot",
      year : 2024
    },
  ]
}
console.log(Library)

// Task 6 : Access & log the name of the library & titles of all the books in the library

const LibraryName = Library["LibraryName"]
const TitleOfBooks = Library.AvailableBooks.map( book => book.title )
console.log(`Library Name : ${LibraryName}`)
console.log(`Book Title : ${TitleOfBooks}`)

// ACTIVITY FOUR : The `this` keyword

// Task 7 : Add the method to the book the uses `this` keyword to return a string with books title & year , & log the result

Book.thisData = function(){
  let result = `Book title : ${this.title}
Book Author : ${this.author}
  `
  return result;
}

const AtomicThisData = Book.thisData()
console.log(AtomicThisData)

// ACTIVITY FIVE : Object Iteration

// Task 8 : Use a `for..in` loop to iterate over the properties of book object & log each property & its value

for( const properties in Book ){
  console.log(`${properties} : ${Book[properties]}`)
}

// Task 9 : Use `Object.keys` & `Object.values` method to log all the keys & value of the book object

const BookKeys = Object.keys(Book)
const BookValue = Object.values(Book)

console.log(`Keys : ` , BookKeys)
console.log(`Value : ` , BookValue)