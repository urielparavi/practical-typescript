const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    // foundBook.length
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);
