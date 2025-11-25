let myLibrary = [];

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

function findBookByID(domElement) {
    let id = domElement.id;

    for(let book of myLibrary) {
        if(book.id === id){return book}
    }
}

function createBookCard(book) {
  // Create main container
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  bookDiv.id = book.id;

  // =========================
  // Delete (X) button
  // =========================
  const deleteBtn = document.createElement("i");
  deleteBtn.classList.add("fa-solid", "fa-xmark", "delete-book");

  // Add the delete button FIRST so it sits on top visually
  bookDiv.appendChild(deleteBtn);
  

  // Left section
  const bookLeft = document.createElement("div");
  bookLeft.classList.add("book-left");

  const title = document.createElement("h1");
  title.classList.add("book-title");
  title.textContent = book.name;
  bookLeft.appendChild(title);

  // Right section
  const bookRight = document.createElement("div");
  bookRight.classList.add("book-right");

 // Conditional border based on haveRead
  bookDiv.style.borderRight = book.haveRead
      ? "6px solid #A3B18A"
      : "6px solid #6A2E2A";


  const author = document.createElement("p");
  author.classList.add("book-info");
  author.textContent = `Author: ${book.author}`;

  const pages = document.createElement("p");
  pages.classList.add("book-info");
  pages.textContent = `Pages: ${book.numPages}`;

  const haveRead = document.createElement("p");
  haveRead.classList.add("book-info");
  haveRead.textContent = `Read: ${book.haveRead ? "Yes" : "No"}`;

  // =========================
  // NEW BUTTON
  // =========================
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle Read";
  toggleBtn.classList.add("toggle-read-btn");
  toggleBtn.setAttribute("data-id", book.id);

  // Append everything to right section
  bookRight.append(author, pages, haveRead, toggleBtn);

  // Combine card sections
  bookDiv.append(bookLeft, bookRight);

  return bookDiv;
}

function displayBooks() {
    const content = document.querySelector(".content");

    // Remove existing book cards only
    const existingCards = content.querySelectorAll(".book");
    existingCards.forEach(card => card.remove());

    // Rebuild the UI from the current library
    for (let book of myLibrary) {
        let bookCard = createBookCard(book);
        content.appendChild(bookCard);
    }
}



// Test books
const book1 = new Book("Dune", "Frank Herbert", 412, true);
const book2 = new Book("1984", "George Orwell", 328, false);
/*const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
const book4 = new Book("Fahrenheit 451", "Ray Bradbury", 194, false);
const book5 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
const book6 = new Book("The Catcher in the Rye", "J.D. Salinger", 277, false);
const book7 = new Book("Brave New World", "Aldous Huxley", 311, true);
const book8 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
const book9 = new Book("Moby Dick", "Herman Melville", 635, false);
const book10 = new Book("Pride and Prejudice", "Jane Austen", 279, true);
*/
// Add them to the library
addBookToLibrary(book1);
addBookToLibrary(book2);
/*addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
addBookToLibrary(book7);
addBookToLibrary(book8);
addBookToLibrary(book9);
addBookToLibrary(book10);*/


displayBooks();

// ---------------------- //
// Form Shit //
// ---------------------- //

const addBookBtn = document.querySelector("#add");
const form = document.querySelector(".new-book-form");

addBookBtn.addEventListener("click", function(e) {
    e.preventDefault();

    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
});

const closeFormBtn = document.querySelector(".close-form");

closeFormBtn.addEventListener("click", function(e) {
    e.preventDefault();

    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
});

const bookForm = document.querySelector("#bookForm");
const content = document.querySelector(".content");

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Pull values from the form
    const name = document.querySelector("#title").value.trim();
    const author = document.querySelector("#author").value.trim();
    const pages = document.querySelector("#pages").value.trim();
    const read = document.querySelector("#read").value === "true"; 

    // Create the book and card
    let newBookCard = createBookCard(new Book(name, author, pages, read));

    // Add card to the page
    content.appendChild(newBookCard);

    // Optional: Reset form after submission
    bookForm.reset();
    form.style.display = "none";
});

content.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-book")) {

        const bookCard = e.target.closest(".book");
        const book = findBookByID(bookCard);


        // Remove from DOM
        bookCard.remove();

        // Remove from array
        myLibrary = myLibrary.filter(b => b.id !== book.id);

        console.log("📚 myLibrary AFTER deletion:", myLibrary);
    }
});

content.addEventListener("click", function (e) {
    if (e.target.classList.contains("toggle-read-btn")) {

        const bookCard = e.target.closest(".book");
        const book = findBookByID(bookCard);

        book.haveRead = !book.haveRead;
        displayBooks();
    }
})




