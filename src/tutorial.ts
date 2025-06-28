function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to this example ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: 'anna',
  email: 'anna@gmail.com',
};

createStudent(newStudent); // Welcome to this example ANNA!!!
createStudent({ id: 1, name: 'bob', email: 'bobo@gmail.com' }); // Welcome to this example BOB!!!
