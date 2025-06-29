interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: 'john',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: 'jane',
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

// console.log(person.getDetails());
console.log(employee.getDetails());

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: 'bob',
  age: 35,
  dogName: 'rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Name: ${this.name}`;
  },
  managePeople() {
    console.log('Managing people..');
  },
};

manager.managePeople();
