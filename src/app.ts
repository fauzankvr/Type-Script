import { Book } from "./models/Book";
import { Student } from "./models/Studet";
import { Teacher } from "./models/Teacher";
import { Library } from "./sevices/Library";

const library = new Library()

library.addBook(new Book(1, 'Atomic Habit', 'Jems Clear', 899, true))
library.addBook(new Book(2, 'Big Binary', 'David', 900, true))

const student = new Student(101, 'Haris')
const teacher = new Teacher(21, 'Reshma T')

library.registerUser(student)
library.registerUser(teacher)

console.log(student.borrowBook(library.findBookById(1)!))
console.log(teacher.borrowBook(library.findBookById(2)!))

student.lisBorrowBooks()
teacher.lisBorrowBooks()

console.log(student.retunBook(library.findBookById(1)!))
console.log(teacher.retunBook(library.findBookById(2)!))