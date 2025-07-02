class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork = new Book('deep work ', 'cal newport');

console.log(deepWork); // {title: 'deep work ', author: 'cal newport'}
