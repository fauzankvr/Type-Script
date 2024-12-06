"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = [];
    }
    retunBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index == -1)
            return `${this.name} dosnot have this book`;
        this.borrowedBooks.splice(index, 1);
        book.isAvilable = true;
        return `${this.name} returned ${book.title}`;
    }
    lisBorrowBooks() {
        if (this.borrowBook.length === 0) {
            console.log(`${this.name} has not borrowed any Books`);
            return;
        }
        console.log(`${this.name} borrowed :`);
        this.borrowedBooks.forEach((book, index) => {
            console.log(`${index + 1} , ${book.title} By ${book.author}`);
        });
    }
}
exports.User = User;
