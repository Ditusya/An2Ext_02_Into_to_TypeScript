// showHello('greeting', 'TypeScript');
//
// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = `Hello from ${name}`;
// }


interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?(reason: string): void;
}

interface bookInfo {
    title: string;
    author: string;
    available: boolean;
    category: Category;
}

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

function getAllBooks(): Array<Book> {
    let allBooks: Array<any> = [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript},
        { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
    return allBooks;
}

logFirstAvailable(getAllBooks());

function logFirstAvailable(allBooks:bookInfo[]): void{
    console.log(allBooks.length);
    for(let book of allBooks) {
        if(book.available){
            console.log(`first 
            available 
            book: 
            ${ book.title }`);
            break;
        }
    }
}

function getBookTitlesByCategory(category : Category){
    let jsBooks: Array<String> = new Array;
    for (let book of  getAllBooks()) {
        if (book.category == category){
            jsBooks.push(book.title);
        }
    }
    return jsBooks;
}

console.log(getBookTitlesByCategory(Category.JavaScript))

function logBookTitles(books: Array<String>): void{
    books.forEach(element => console.log(element));
}
logBookTitles(getBookTitlesByCategory(Category.JavaScript));


function printBook(book: Book) {
    console.log(book.title + ' by ' + book.author)
}
let myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: reason => console.log(`Damaged: ${reason}`)
};

printBook(myBook)
myBook.markDamaged('missing back cover');