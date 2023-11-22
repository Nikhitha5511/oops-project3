class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.available = true;
    }

    isAvailable() {
        return this.available;
    }

    borrowBook() {
        if (this.available) {
            this.available = false;
            return true;
        } else {
            return false;
        }
    }

    returnBook() {
        this.available = true;
    }
}

class LibraryMember {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (book.borrowBook()) {
            this.borrowedBooks.push(book);
            return true;
        } else {
            return false;
        }
    }

    returnBook(book) {
        book.returnBook();
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }

    getBorrowedBooks() {
        return this.borrowedBooks.map(book => book.title);
    }
}

class LibraryStaff {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    addBook(library, title, author) {
        const newBook = new Book(title, author);
        library.books.push(newBook);
    }

    removeDamagedBook(library, book) {
        const index = library.books.indexOf(book);
        if (index !== -1) {
            library.books.splice(index, 1);
        }
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    checkAvailability(bookTitle) {
        const book = this.books.find(b => b.title === bookTitle);
        return book ? book.isAvailable() : false;
    }

    findBookByTitle(bookTitle) {
        return this.books.find(b => b.title === bookTitle) || null;
    }
}


const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");

const library = new Library();

library.books.push(book1, book2, book3);

const member = new LibraryMember("John Doe", "john@example.com");

console.log("Book availability before borrowing:");
console.log("The Hobbit:", book1.isAvailable()); 
console.log("1984:", book2.isAvailable()); 

const borrowResult1 = member.borrowBook(book1);
console.log("\nBorrowing The Hobbit...");
if (borrowResult1) {
    console.log("The Hobbit successfully borrowed!");
} else {
    console.log("The Hobbit is not available for borrowing.");
}

console.log("\nBook availability after borrowing:");
console.log("The Hobbit:", book1.isAvailable()); 
console.log("1984:", book2.isAvailable()); 

const borrowResult2 = member.borrowBook(book1);
console.log("\nAttempting to borrow The Hobbit again...");
if (borrowResult2) {
    console.log("The Hobbit successfully borrowed!");
} else {
    console.log("The Hobbit is not available for borrowing.");
}

console.log("\nReturning The Hobbit...");
member.returnBook(book1);
console.log("Book availability after returning The Hobbit:", book1.isAvailable()); 