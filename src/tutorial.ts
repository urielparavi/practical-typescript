interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;

  // Methods defined with shorthand syntax — treated as methods with proper `this` binding
  printAuthor(): void;
  printTitle(message: string): string;

  // Property holding a function — function assigned as a property, not a method shorthand
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help',
  // printAuthor() {
  //   console.log(this.author);
  // },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // First option - regular function
  printSomething: function (someValue) {
    return someValue;
  },

  // Second option - arrow function
  // printSomething: (someValue) => {
  //   console.log(deepWork.author); // for cal newport
  //   return someValue; // for 34
  // },

  // Third option
  // printSomething(someValue) {
  //   return someValue;
  // },

  // Fourth option
  printAuthor: () => {
    console.log(deepWork.author);
  },
};

console.log(deepWork.printSomething(34));
deepWork.printAuthor();
