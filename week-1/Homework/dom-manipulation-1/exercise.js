/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    
    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
/////////////////////Task 1.1 ///////////////////
const allTheTagP = document.querySelectorAll('p')
console.log(allTheTagP);
///////////////////End Task 1.1 /////////////////


/////////////////////Task 1.2 ///////////////////
const firstDivElement = document.querySelector('div')
console.log(firstDivElement);
///////////////////End Task 1.2 /////////////////


/////////////////////Task 1.3 ///////////////////
const elementIdJumbotron = document.querySelector('#jumbotron-text')
console.log(elementIdJumbotron);
///////////////////End Task 1.3 /////////////////


/////////////////////Task 1.4 ///////////////////
const allTheTagPInsedeOfPrimaryContent = document.querySelectorAll('.primary-content p')
console.log(allTheTagPInsedeOfPrimaryContent);
///////////////////End Task 1.4 /////////////////
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const clickEventAlert = document.querySelector('#alertBtn')
clickEventAlert.addEventListener('click', event =>{
    event.preventDefault()
    alert('Thanks for visiting Bikes for Refugees!')
})

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
// const changeBackgroundColor = document.querySelector('#bgrChangeBtn')
// const backgroundPage = document.querySelector('body')
// changeBackgroundColor.addEventListener('click', event =>{ 
//     event.preventDefault()
//     const randomNumberRed = Math.random()*255
//     const randomNumberGreen = Math.random()*255
//     const randomNumberBlue = Math.random()*255
//     const randomRGBColor = 'rgb('+randomNumberRed+','+randomNumberGreen+','+randomNumberBlue+')'
//     backgroundPage.style.backgroundColor = randomRGBColor
// })

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const addText = document.querySelector('#addTextBtn')
addText.addEventListener('click', event => {
    event.preventDefault()

    const selecDivMainArticles = document.querySelector('#mainArticles')

    const createNewArticle = document.createElement('article')
    createNewArticle.classList.add('article')

    const createNewParagraph = document.createElement('p')
    createNewParagraph.classList.add('article-lead')

    createNewArticle.appendChild(createNewParagraph)
    selecDivMainArticles.appendChild(createNewArticle)

    createNewParagraph.textContent= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias velit qui eos reprehenderit voluptas voluptate porro aperiam quod, nesciunt modi, assumenda repudiandae magnam ipsa quibusdam temporibus molestias, officia non quam?'
})



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const selectAllLinks = document.querySelectorAll('.sidebar-content a')
console.log(selectAllLinks);
const largerLinksBtn = document.querySelector('#largerLinksBtn')
let sizeFontAdd = 16
largerLinksBtn.addEventListener('click', event =>{
    event.preventDefault()
    selectAllLinks.forEach(element=>{
        element.style.fontSize = sizeFontAdd+'px'
    })
    sizeFontAdd=sizeFontAdd+20
})
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const addTextWrite = document.querySelector('#addNewText')
const textWrite = document.querySelector('#addArticleBtn')

addTextWrite.addEventListener('submit', event => {
    event.preventDefault()
    const newText = event.target.firstElementChild.value
    
    const selecDivMainArticles = document.querySelector('#mainArticles')
    
    const createNewArticle = document.createElement('article')
    createNewArticle.classList.add('article')
    
    const createNewParagraph = document.createElement('p')
    createNewParagraph.classList.add('article-lead')
    
    createNewArticle.appendChild(createNewParagraph)
    selecDivMainArticles.appendChild(createNewArticle)
    
    createNewParagraph.textContent= newText
})

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
const newBackgroundColor = document.querySelector('#bgrChangeBtn')
const backgroundBody = document.querySelector('body')
const colorsToBackground = ['#87ca8a', '#dccdc6', 'aqua', '#f0ad4e']
let index = 0
newBackgroundColor.addEventListener('click', event =>{ 
    event.preventDefault()
    console.log(colorsToBackground[index]);
    if (index !== colorsToBackground.length-1){
        backgroundBody.style.backgroundColor = colorsToBackground[index]
        index = index + 1
    }
    else {
        index = 0
        backgroundBody.style.backgroundColor = colorsToBackground[index]
        index = index + 1
    }
})
