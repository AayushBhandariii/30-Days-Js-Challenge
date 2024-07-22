console.log(
    `
    
██████╗░░█████╗░██╗░░░██╗  ░░███╗░░░█████╗░  ██╗██╗░░
██╔══██╗██╔══██╗╚██╗░██╔╝  ░████║░░██╔══██╗  ╚═╝╚██╗░
██║░░██║███████║░╚████╔╝░  ██╔██║░░██║░░██║  ░░░░╚██╗
██║░░██║██╔══██║░░╚██╔╝░░  ╚═╝██║░░██║░░██║  ░░░░██╔╝
██████╔╝██║░░██║░░░██║░░░  ███████╗╚█████╔╝  ██╗██╔╝░
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝░╚════╝░  ╚═╝╚═╝░░
    `
)

// ? Declaring Variables

// For Task One
const taskOneParagraph = document.querySelector(".task-one-paragraph")
const taskOneButton = document.querySelector(".task-one-button")

// For Task Two 
const taskTwoImg = document.querySelector('.task-two-img')

// For Task Three & Four
const taskThreeAndFourElement = document.querySelector('.activity-two-element')

// For Task Five
const taskFiveKeydownInput = document.querySelector('.task-five-keydown_input')

// For Task Six
const taskSixKeyupInput = document.querySelector('.task-six-keyup_input')

// For Task Seven
const taskSevenForm = document.querySelector('#form')
const taskSevenInput = document.querySelector('.userInput')

// For Task Eight
const taskEightThemesDropdown = document.getElementById('userSelection')
const taskEightThemeStatus = document.getElementById("themeStatus")

// For Task Nine
const taskNineUlList = document.querySelector("#todo_list")

// For Task Ten
const taskTenList = document.getElementById("task-ten-items-container")

// ? Adding Event Listener

// Task 1: Add a click event listner to a button that changes content of a paragraph
taskOneButton.addEventListener( "click" , () => taskOneParagraph.textContent = `Text Content was changed successfully` )

// Task 2: Add a double-click event listner to an image that toggles its visibility
taskTwoImg.addEventListener( "dblclick" , () => taskTwoImg.style.display === 'none' ? taskTwoImg.style.display = 'block' : taskTwoImg.style.display = "none" )

// Task 3: Add a mouseover event listener to an element that changes its background
// For Task Three & Four
let bgColor; // bgColor will get its currentColor so we can easily reset it

// * Mouseover
taskThreeAndFourElement.addEventListener( "mouseover" , () => {
    taskThreeAndFourElement.textContent = `Mouseout to see the magic`
    bgColor = taskThreeAndFourElement.style.backgroundColor
    taskThreeAndFourElement.style.backgroundColor = "blue"
})

// * Mouseout
taskThreeAndFourElement.addEventListener( "mouseout" , () => {
    taskThreeAndFourElement.textContent = `Mouseover here to see the change !`
    taskThreeAndFourElement.style.backgroundColor = bgColor
})

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console
taskFiveKeydownInput.addEventListener( "keydown" , (e) => {
  taskFiveKeydownInput.setAttribute( 'placeholder' , 'check the console')
  const pressedKey = e.key
  console.log(pressedKey)  
})

// Task 6: Add a keyup event listener to an input field that displays the current value in paragraph
taskSixKeyupInput.addEventListener( "keyup" , (e) => {
    const taskSixParagraph = document.getElementById('task-six-paragraph')
    const TextContent = e.target.value
    taskSixParagraph.textContent = TextContent
})

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console
taskSevenForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form object : ", e);
    const TaskFormData = new FormData( taskSevenForm );
    for (const [key, value] of TaskFormData.entries()) {
      console.log(`${key}: ${value}`);
    }
}
)

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph
taskEightThemesDropdown.addEventListener("click" , (e) => {
    const themeValue = e.target.value
    taskEightThemeStatus.textContent = `You are currently using : ${themeValue}`
})

// Task 9 : Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation
taskNineUlList.addEventListener( "click" , (e) => console.log( e.target.tagName === "LI" ? e.target.textContent : 'Not a li'))

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements
const newElement = document.createElement('li')
newElement.textContent = "New Element for Task 10"
taskTenList.appendChild( newElement )

taskTenList.addEventListener( "click" , (e) => console.log( e.target.tagName === newElement.tagName ? e.target.textContent : '' ) )