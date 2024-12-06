import { Book } from "./Book";
import { User } from "./User";

export class Teacher extends User{
    private borrowedLimit = 5;

    borrowBook(book: Book): string {
        if (!book.isAvilable) return `${book.title} is not avilable`
        if (this.borrowedBooks.length > this.borrowedLimit) {
            return `Teacher ${this.name} canot borrow more than ${this.borrowedLimit} books `
        }
        this.borrowedBooks.push(book)
        book.isAvilable = false
        return `Teacher ${this.name} borrowed ${book.title}`
    }
}