type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// { id: 1, name: 'john', isActive: true }
// createUser(john); // Hello there john !!!

type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'hello';
value = 1234;

type Theme = 'light' | 'dark';
let theme: Theme;
theme = 'dark';
theme = 'light';

function setTheme(t: Theme) {
  theme = t;
}

setTheme('dark');
