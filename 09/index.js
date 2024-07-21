console.log(
  `
██████╗░░█████╗░██╗░░░██╗  ░█████╗░
██╔══██╗██╔══██╗╚██╗░██╔╝  ██╔══██╗
██║░░██║███████║░╚████╔╝░  ╚██████║
██║░░██║██╔══██║░░╚██╔╝░░  ░╚═══██║
██████╔╝██║░░██║░░░██║░░░  ░█████╔╝
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ░╚════╝░
  `
)

// ACTIVITY ONE : Selecting & Manipulating Elements

// Task 1 : Select an HTML element by its ID & change it textcontent
const idElement = document.getElementById('idElement')
idElement.textContent = "Id Element is selected"

// Task 2 : Select an HTML element by its Class & change its background color
const classElement = document.querySelector('.acceptButton')
classElement.style.backgroundColor = "#000"

// ACTIVITY TWO : Creating & Appending Elements

// Task 3 : Create a new div with some text content & apppend it to the body

const newDivElement = document.createElement('div')
newDivElement.textContent = 'This is a new div added by appending it to the body element'
document.body.appendChild(newDivElement)

// Task 4 : Create a new li element & add it to an existing ul list

const unorderedList = document.getElementById('un-list')
const liElement = document.createElement('li')
liElement.textContent = "New li list is added to ul"
unorderedList.appendChild(liElement)

// ACTIVITY THREE : Removing Elements

// Task 5 : Select an HTML element & remove it from the DOM

liElement.remove()

// Task 6 : Remove the last child of a specific HTML Element

unorderedList.lastElementChild.remove()

// ACTIVITY FOUR : Modifying Attributes & Classes

// Task 7 : Select an HTML element & change one of its attribute ( eg src of an img tag )

function handleClick(){
  const imgLink = `https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0`

  const img = document.querySelector('.Nature_img')

  img.setAttribute("src" , imgLink)
}

// Task 8 : Add or remove css from html element 

unorderedList.addEventListener('click' , () => {
  unorderedList.style.display = 'flex'
  unorderedList.style.flexDirection = 'column'
  unorderedList.style.justifyContent = 'center'
  unorderedList.style.alignItems = 'center'
})

// ACTIVITY FIVE : Event Handling

// Task 9 : Add a event listener to a button that changes the content of paragraph

const paragraph = document.querySelector(".text-content-p")
paragraph.addEventListener("click" , () => {
  paragraph.textContent = `Text Content Changed`
})

const border_element = document.querySelector(".border-element")
border_element.addEventListener("mouseover" , ( ) => {
  border_element.style.border = "solid 10px blue"
})