class Book {
  private checkedOut: boolean = false;

  constructor(readonly title: string, public author: string) {}

  get info() {
    return `${this.title} by ${this.author}`;
  }

  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
  get checkOut() {
    return this.checkedOut;
  }

  public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
  }
}

const deepWork = new Book('deep work ', 'cal newport');
console.log(deepWork.info); // deep work  by cal newport
// deepWork.checkOut = true;
console.log(deepWork); // {checkedOut: false, title: 'deep work ', author: 'cal newport'}
console.log(deepWork.someInfo); // deep work  by cal newport
console.log(deepWork.checkOut); // true
