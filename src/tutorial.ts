// Define user roles using an enum for better readability and to avoid magic strings.
// Each role is assigned a numeric value starting from 0 by default.
enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  // Specify the user's role using the UserRole enum to ensure only valid predefined roles are allowed.
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const user: User = createUser({
  id: 1,
  name: 'john doe',
  role: UserRole.Admin,
  contact: ['john@gmail.com', '123-456-789'],
});

console.log(user);
