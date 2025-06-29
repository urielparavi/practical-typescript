function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();

  if (random < 0.33) {
    // Returns a Person (only has 'name')
    return {
      name: 'john',
    };
  } else if (random < 0.66) {
    // Returns a DogOwner (has 'name' and 'dogName')
    return {
      name: 'sarah',
      dogName: 'rex',
    };
  } else {
    // Returns a Manager (has 'name', 'managePeople', and 'delegateTasks')
    return {
      name: 'bob',
      managePeople() {
        console.log('Managing people...');
      },
      delegateTasks() {
        console.log('Delegating tasks...');
      },
    };
  }
}

interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const employee: Person | DogOwner | Manager = getEmployee();

console.log(employee);
