import { Book } from "./Book";
import { User } from "./User";

export class Student extends User{
    private maxBorrowLimit = 3;

    borrowBook(book: Book): string {
        if (!book.isAvilable) return `${book.title} is not available`
        if (this.borrowedBooks.length > this.maxBorrowLimit) {
            return `Student ${this.name} canot borrow more than ${this.maxBorrowLimit} books`;
        }
          this.borrowedBooks.push(book)
        book.isAvilable = false
        return `Student ${this.name} borrowed ${book.title}`
    }
}