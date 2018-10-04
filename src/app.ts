showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

interface bookInfo {
    title: string;
    author: string;
    available: boolean;
}

function getAllBooks(){
    let allBooks:bookInfo[] = [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
    return allBooks;
}

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

console.log(logFirstAvailable(getAllBooks()));

