"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book ${book.title} added to Library`);
    }
    registerUser(user) {
        this.users.push(user);
        console.log(`User ${user.name} adder new User`);
    }
    findBookById(id) {
        return this.books.find((book) => book.id === id);
    }
    findUserById(id) {
        return this.users.find((user) => user.id == id);
    }
}
exports.Library = Library;
