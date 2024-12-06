import { Book } from "../models/Book";
import { User } from "../models/User";

export class Library{
    private books: Book[] = []
    private users: User[] = []
    
    addBook(book: Book) {
        this.books.push(book)
        console.log(`Book ${book.title} added to Library`)
    }

    registerUser(user: User):void {
        this.users.push(user)
        console.log(`User ${user.name} adder new User`)
    }

    findBookById(id: number):Book | undefined {
        return this.books.find((book)=>book.id === id)
    }
    findUserById(id: number): User | undefined{
        return this.users.find((user)=>user.id == id)
    }
}