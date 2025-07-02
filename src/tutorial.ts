class Book {
  public readonly title: string;
  public author: string;
  private checkedOut: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  public checkOut() {
    this.checkedOut = this.toggleCheckedOutStatus();
  }
  public isCheckedOut() {
    return this.checkedOut;
  }
  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}

const deepWork = new Book('deep work ', 'cal newport');

deepWork.checkOut(); // first call – from false → true
deepWork.checkOut(); // second call – from true → false
console.log(deepWork.isCheckedOut()); // prints false

// console.log(deepWork); // {title: 'deep work ', author: 'cal newport'}
