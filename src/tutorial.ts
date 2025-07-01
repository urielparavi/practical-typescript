import newStudent, { sayHello, person, type Student } from './actions';
// import { someValue } from './example.js';

// console.log(someValue);

sayHello('Typescript');

console.log(newStudent);

console.log(person);

const anotherStudent: Student = {
  name: 'bob',
  age: 23,
};

console.log(anotherStudent);
