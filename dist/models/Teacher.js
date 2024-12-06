"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const User_1 = require("./User");
class Teacher extends User_1.User {
    constructor() {
        super(...arguments);
        this.borrowedLimit = 5;
    }
    borrowBook(book) {
        if (!book.isAvilable)
            return `${book.title} is not avilable`;
        if (this.borrowedBooks.length > this.borrowedLimit) {
            return `Teacher ${this.name} canot borrow more than ${this.borrowedLimit} books `;
        }
        this.borrowedBooks.push(book);
        book.isAvilable = false;
        return `Teacher ${this.name} borrowed ${book.title}`;
    }
}
exports.Teacher = Teacher;
