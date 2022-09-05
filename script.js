// Variables et Constantes
let myLibrary = [];

function Book(title, author, numberOfPages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.hasBeenRead = hasBeenRead;
}
function addBookToLibrary(book) {
  myLibrary.push(book);
}

const HarryPotter = new Book("Harry Potter", "J.K Rowling", 300, "Non lu");
const LeSeigneurDesAnneaux = new Book(
  "Le Seigneur des Anneaux",
  "J.R.R Tolkien",
  450,
  "Lu"
);
addBookToLibrary(HarryPotter);
addBookToLibrary(LeSeigneurDesAnneaux);

console.log(myLibrary);
