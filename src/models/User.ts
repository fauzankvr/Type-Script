import { Book } from "./Book";

export abstract class User {
    protected borrowedBooks: Book[] = []
    constructor(
        public id :number,
        public name: string,
    ) { }
    abstract borrowBook(book: Book): string 
    
    retunBook(book: Book):string {
        const index = this.borrowedBooks.indexOf(book)
        if (index == -1) return `${this.name} dosnot have this book`
        this.borrowedBooks.splice(index, 1)
        book.isAvilable = true
        return `${this.name} returned ${book.title}`
    }
    lisBorrowBooks(): void{
        if (this.borrowBook.length === 0) {
            console.log(`${this.name} has not borrowed any Books`)
            return 
        }
        console.log(`${this.name} borrowed :`)
        this.borrowedBooks.forEach((book,index) => {
           console.log(`${index +1} , ${book.title} By ${book.author}`)
       })
    }
}