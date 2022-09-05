// Variables et Constantes
let myLibrary = [];
const libraryContainer = document.querySelector("#libraryContainer");
const addBookButton = document.querySelector("#addBookButton");
// Display Functions
function displayLibrary() {
  myLibrary.forEach(function (item) {
    let bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    libraryContainer.appendChild(bookCard);
    let bookTitleContainer = document.createElement("p");
    bookTitleContainer.textContent = item.title;
    bookCard.appendChild(bookTitleContainer);
    let bookAuthorContainer = document.createElement("p");
    bookAuthorContainer.textContent = item.author;
    bookCard.appendChild(bookAuthorContainer);
    let bookPagesContainer = document.createElement("p");
    bookPagesContainer.textContent = `${item.numberOfPages} pages`;
    bookCard.appendChild(bookPagesContainer);
    let bookReadContainer = document.createElement("p");
    if (item.hasBeenRead === true) {
      bookReadContainer.textContent = "Lu";
    } else {
      bookReadContainer.textContent = "Non lu";
    }
    bookCard.appendChild(bookReadContainer);
  });
}

// Book Functions
function Book(title, author, numberOfPages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.hasBeenRead = hasBeenRead;
}
function addBookToLibrary(book) {
  myLibrary.push(book);
}

const HarryPotter = new Book("Harry Potter", "J.K Rowling", 300, false);
const LeSeigneurDesAnneaux = new Book(
  "Le Seigneur des Anneaux",
  "J.R.R Tolkien",
  450,
  true
);
const livre3 = new Book("Harry Potter", "J.K Rowling", 300, false);
const livre4 = new Book("Harry Potter", "J.K Rowling", 300, false);
const livre5 = new Book("Harry Potter", "J.K Rowling", 300, false);
addBookToLibrary(HarryPotter);
addBookToLibrary(LeSeigneurDesAnneaux);
addBookToLibrary(livre3);
addBookToLibrary(livre4);
addBookToLibrary(livre5);
displayLibrary();
console.log(myLibrary);
