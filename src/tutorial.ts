class Book {
  private checkedOut: boolean = false;

  constructor(
    readonly title: string,
    public author: string,
    private someValue: number
  ) {}
  public getSomeValue() {
    return this.someValue;
  }
}

const deepWork = new Book('deep work ', 'cal newport', 445);

console.log(deepWork.getSomeValue());
