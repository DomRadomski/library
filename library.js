const myLibrary = [];

function Book(name, author, pages, haveRead) {
  this.name = name;
  this.id = crypto.randomUUID();
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(name, author, pages, haveRead) {
  let book = new Book(name, author, pages, haveRead);
  myLibrary.push(book);
}

