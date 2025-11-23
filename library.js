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

  const author = document.createElement("p");
  author.classList.add("book-info");
  author.textContent = `Author: ${book.author}`;

  const pages = document.createElement("p");
  pages.classList.add("book-info");
  pages.textContent = `Pages: ${book.pages}`;

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


const myBook = new Book("Dune", "Frank Herbert", 412, true)
addBookToLibrary(myBook);

displayBooks();
