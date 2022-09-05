// Variables et Constantes
let myLibrary = [];
const libraryContainer = document.querySelector("#libraryContainer");
const addBookButton = document.querySelector("#addBookButton");
const submitBookButton = document.querySelector("#submitBookButton");
const addBookForm = document.querySelector("#addBookForm");
const overlay = document.querySelector(".overlay");
// Display Functions
function displayLibrary() {
  libraryContainer.innerHTML = "";
  myLibrary.forEach(function (item) {
    displayCard(item);
  });
}
function displayCard(item) {
  let bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");
  bookCard.dataset.index = myLibrary.indexOf(item);
  libraryContainer.appendChild(bookCard);
  let bookTitleContainer = document.createElement("p");
  bookTitleContainer.classList.add("bookTitleContainer");
  bookTitleContainer.textContent = item.title;
  bookCard.appendChild(bookTitleContainer);
  let bookAuthorContainer = document.createElement("p");
  bookAuthorContainer.classList.add("bookAuthorContainer");
  bookAuthorContainer.textContent = item.author;
  bookCard.appendChild(bookAuthorContainer);
  let bookPagesContainer = document.createElement("p");
  bookPagesContainer.classList.add("bookPagesContainer");
  bookPagesContainer.textContent = `${item.numberOfPages} pages`;
  bookCard.appendChild(bookPagesContainer);
  let bookReadContainer = document.createElement("p");
  bookReadContainer.classList.add("bookReadContainer");
  if (item.hasBeenRead === true) {
    bookReadContainer.textContent = "Lu";
    bookReadContainer.classList.add("green");
    bookReadContainer.classList.remove("red");
  } else {
    bookReadContainer.textContent = "Non lu";
    bookReadContainer.classList.add("red");
    bookReadContainer.classList.remove("green");
  }
  bookReadContainer.addEventListener("click", () => {
    toggleHasBeenRead(bookCard.dataset.index);
    displayLibrary();
  });
  bookCard.appendChild(bookReadContainer);
  let deleteBookButton = document.createElement("p");
  deleteBookButton.dataset.index = myLibrary.indexOf(item);
  deleteBookButton.classList.add("deleteButton");
  deleteBookButton.textContent = "Supprimer";
  bookCard.appendChild(deleteBookButton);
  deleteBookButton.addEventListener("click", () => {
    deleteBookFromLibrary(bookCard.dataset.index);
    displayLibrary();
  });
}
function revealCreateBookForm() {
  addBookForm.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function hideCreateBookForm() {
  addBookForm.classList.add("hidden");
  overlay.classList.add("hidden");
}
// Books Functions
function Book(title, author, numberOfPages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.hasBeenRead = hasBeenRead;
}
function createBook() {
  let title = document.getElementById("titleInput").value;
  let author = document.getElementById("authorInput").value;
  let numberOfPages = document.getElementById("NumberOfPageInput").value;
  let hasBeenRead = document.getElementById("hasBeenReadInput").checked;
  let newBook = new Book(title, author, numberOfPages, hasBeenRead);
  return newBook;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
function deleteBookFromLibrary(index) {
  myLibrary.splice(index, 1);
}

function toggleHasBeenRead(index) {
  if (myLibrary[index].hasBeenRead === true) {
    myLibrary[index].hasBeenRead = false;
  } else {
    myLibrary[index].hasBeenRead = true;
  }
}

const HarryPotter = new Book("Harry Potter", "J.K Rowling", 300, true);
const LeSeigneurDesAnneaux = new Book(
  "Le Seigneur des Anneaux",
  "J.R.R Tolkien",
  450,
  true
);
const LaRoueDuTemps = new Book("La Roue du Temps", "Robert Jordan", 120, false);
addBookToLibrary(HarryPotter);
addBookToLibrary(LeSeigneurDesAnneaux);
addBookToLibrary(LaRoueDuTemps);
displayLibrary();

// Event Listeners
submitBookButton.addEventListener("click", () => {
  addBookToLibrary(createBook());
  displayLibrary();
  hideCreateBookForm();
});
addBookButton.addEventListener("click", () => {
  revealCreateBookForm();
});
overlay.addEventListener("click", () => {
  hideCreateBookForm();
});
