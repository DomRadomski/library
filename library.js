const myLibrary = [];

function Book(name, author, numPages, haveRead) {

  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.numPages = numPages;
  this.haveRead = haveRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createBookCard(book) {
  // Create main container
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  // Left section
  const bookLeft = document.createElement("div");
  bookLeft.classList.add("book-left");

  const title = document.createElement("h1");
  title.classList.add("book-title");
  title.textContent = book.name; // Book title
  bookLeft.appendChild(title);

  // Right section
  const bookRight = document.createElement("div");
  bookRight.classList.add("book-right");

  // Conditional border based on haveRead
  if (book.haveRead) {
    bookDiv.style.borderRight = "6px solid #A3B18A"; // greenish border if read
  } else {
    bookDiv.style.borderRight = "6px solid #6A2E2A"; // burgundy if not read
  }

  const author = document.createElement("p");
  author.classList.add("book-info");
  author.textContent = `Author: ${book.author}`;

  const pages = document.createElement("p");
  pages.classList.add("book-info");
  pages.textContent = `Pages: ${book.numPages}`;

  const haveRead = document.createElement("p");
  haveRead.classList.add("book-info");
  haveRead.textContent = `Read: ${book.haveRead ? "Yes" : "No"}`;

  bookRight.append(author, pages, haveRead);

  // Combine left and right
  bookDiv.append(bookLeft, bookRight);

  return bookDiv;
}


function displayBooks() {
    const content = document.querySelector(".content");

    for (let book of myLibrary) {
        let bookCard = createBookCard(book);
        content.appendChild(bookCard);
    }
}


// Test books
const book1 = new Book("Dune", "Frank Herbert", 412, true);
const book2 = new Book("1984", "George Orwell", 328, false);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
const book4 = new Book("Fahrenheit 451", "Ray Bradbury", 194, false);
const book5 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
const book6 = new Book("The Catcher in the Rye", "J.D. Salinger", 277, false);
const book7 = new Book("Brave New World", "Aldous Huxley", 311, true);
const book8 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
const book9 = new Book("Moby Dick", "Herman Melville", 635, false);
const book10 = new Book("Pride and Prejudice", "Jane Austen", 279, true);

// Add them to the library
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
addBookToLibrary(book7);
addBookToLibrary(book8);
addBookToLibrary(book9);
addBookToLibrary(book10);


displayBooks();
