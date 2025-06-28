function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 }); // { id: 1, isActive: false }
const second = createEmployee({ id: 2 }); // { id: 2, isActive: true }

console.log(first, second); // { id: 1, isActive: false } { id: 2, isActive: true }

// alternative

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to this example ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: 'anna',
};

createStudent(newStudent); // Welcome to this example ANNA!!!
