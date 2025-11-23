Library Project – Actionable Goals

1. Project Setup

    Initialize a Git repository. ✅

    Create skeleton files: index.html, styles.css, script.js. ✅

2. Book Data Structure

    Create a Book constructor to define book objects with:

        id (use crypto.randomUUID()) ✅

        title ✅

        author ✅

        pages ✅

        read status (boolean) ✅

        any other desired properties ✅

        Create an array to store books: const myLibrary = [];. ✅

        Implement a separate function addBookToLibrary() that: ✅

        Takes input parameters ✅

        Creates a Book object ✅

        Pushes it into myLibrary ✅

3. Display Books

    Write a function to loop through myLibrary and render books on the page.

    Decide on a layout: cards, table, or grid.

    Include at least a few manual books to test display.

4. Interactive Elements

    Add a “New Book” button that opens a form.

    Form should include:

        Title

        Author

        Number of pages

        Read status

        Any other optional info

        Use event.preventDefault() on form submission to prevent page reload.

        On form submission, create a new book and update the display.

5. Book Management

    Add a remove button on each book card:

    Remove the book from myLibrary

    Remove the book’s DOM element

    Associate DOM elements with book objects via a data-id attribute.

    Add a toggle read status button on each book card:

    Implement a Book.prototype.toggleRead() method

    Update the book object and DOM to reflect the change

6. Code Organization / Separation of Concerns

    Keep data handling (book objects in array) separate from UI rendering (DOM elements).

    Ensure functions for rendering, adding, removing, and toggling read status are reusable.

7. Optional Enhancements

    Style cards and form to match your color palette.

    Add animations or hover effects for buttons.

    Consider using <dialog> for form modal.

    Persist data using localStorage (optional).