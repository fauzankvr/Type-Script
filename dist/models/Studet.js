"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const User_1 = require("./User");
class Student extends User_1.User {
    constructor() {
        super(...arguments);
        this.maxBorrowLimit = 3;
    }
    borrowBook(book) {
        if (!book.isAvilable)
            return `${book.title} is not available`;
        if (this.borrowedBooks.length > this.maxBorrowLimit) {
            return `Student ${this.name} canot borrow more than ${this.maxBorrowLimit} books`;
        }
        this.borrowedBooks.push(book);
        book.isAvilable = false;
        return `Student ${this.name} borrowed ${book.title}`;
    }
}
exports.Student = Student;
