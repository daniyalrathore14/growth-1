
// Add and remove books and search by author and type
function Book(title, author, type) {
    this.title = title;
    this.author = author;
    this.type = type;
    this.available = true; 
}

function Library() {
    this.books = [];
    this.checkedOutBooks = [];
}

Library.prototype.addBook = function(book) {
    this.books.push(book);
};

Library.prototype.removeBook = function(type) {
    this.books = this.books.filter(book => book.type !== type);
};

Library.prototype.findBookByType = function(type) {
    return this.books.find(book => book.type === type);
};

Library.prototype.checkOutBook = function(type) {
    const book = this.findBookByType(type);
    if (book && book.available) {
        book.available = false;
        this.checkedOutBooks.push(book);
        console.log(`Book "${book.title}" by ${book.author} checked out successfully.`);
    } else {
        console.log("Book not available or does not exist.");
    }
};

Library.prototype.returnBook = function(type) {
    const index = this.checkedOutBooks.findIndex(book => book.type === type);
    if (index !== -1) {
        const returnedBook = this.checkedOutBooks.splice(index, 1)[0];
        returnedBook.available = true;
        console.log(`Book "${returnedBook.title}" by ${returnedBook.author} returned successfully.`);
    } else {
        console.log("Book not found in checked out list.");
    }
};

Library.prototype.listCheckedOutBooks = function() {
    console.log("Checked out books:");
    this.checkedOutBooks.forEach(book => {
        console.log(`- ${book.title} by ${book.author}`);
    });
};

Library.prototype.searchBooks = function(keyword) {
    const foundBooks = this.books.filter(book => book.title.includes(keyword) || book.author.includes(keyword));
    console.log("Search results:");
    foundBooks.forEach(book => {
        console.log(`- ${book.title} by ${book.author}`);
    });
};

// Usage example
var library = new Library();
var book1 = new Book("Title 1", "Author 1", "Fiction");
var book2 = new Book("Title 2", "Author 2", "Real");
library.addBook(book1);
library.addBook(book2);
library.checkOutBook("Fiction");
library.listCheckedOutBooks();
library.returnBook("Fiction");
library.searchBooks("Author 2");
