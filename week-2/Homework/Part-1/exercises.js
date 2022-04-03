///////////////Exercise 1////////////////////////////
/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */

function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((obj) => {
  const titleName = document.createElement('h1')
  const titleJob = document.createElement('h2')
    content.appendChild(titleName)
    content.appendChild(titleJob)
  
    titleName.textContent = obj.name
    titleJob.textContent = obj.job
  
  });
}
/////////////////////////////////////////////////////

///////////////Exercise 2////////////////////////////

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  // Write your code in here
  const listShop = document.createElement('ul')
  content.appendChild(listShop)
  shopping.forEach((item) => {
    const element = document.createElement('li')
    listShop.appendChild(element)
    element.textContent = item
  });
}
/////////////////////////////////////////////////////

///////////////Exercise 3////////////////////////////
/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  // Write your code in here
  const library = document.createElement('h1')
  content.appendChild(library)
  library.textContent = 'Book List'
  const bookList = document.createElement('ul')
  content.appendChild(bookList)
  bookList.style.display = 'flex'
  bookList.style.flexWrap = 'wrap'
  bookList.style.listStyle = 'none'
  

  books.forEach((book) => {
    const titleBook = book.title
    const author = book.author
    const read = book.alreadyRead

    const booksToRead = document.createElement('li')
    bookList.appendChild(booksToRead)
    booksToRead.style.margin = '10px'
    booksToRead.style.padding = '10px'
    
    if (read == true) {
      booksToRead.style.backgroundColor = 'green'
    }
    else {
      booksToRead.style.backgroundColor = 'red'
    }    

    const booksName = document.createElement('p')
    booksToRead.appendChild(booksName)
    booksName.style.color = 'white'
    booksName.textContent = titleBook + ' - ' + author
    })
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
