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

// Get a random employee which can be a Person, DogOwner, or Manager
const employee: Person | DogOwner | Manager = getEmployee();

// Type guard function:
// Checks if the given object has the 'managePeople' method,
// which only exists on the Manager type.
// If so, TypeScript will treat the object as a Manager inside the if-block.
function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return 'managePeople' in obj;
}

// Check if the employee is a Manager.
// Thanks to the type guard, TypeScript now knows that 'employee' is a Manager,
// so we can safely call 'delegateTasks' without type errors.
if (isManager(employee)) {
  employee.delegateTasks();
}
