class Book {
  readonly title: string;
  author: string;
  checkedOut: boolean = false;
  // checkedOut: false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork = new Book('deep work ', 'cal newport');

// deepWork.title = 'bla bla';
console.log(deepWork.title); // {title: 'deep work ', author: 'cal newport'}

console.log(deepWork); // {title: 'deep work ', author: 'cal newport'}
