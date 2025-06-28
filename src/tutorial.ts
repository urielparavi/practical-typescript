const names: string[] = ['john', 'jane', 'jim', 'jill'];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck = 'peter';

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is NOT in the list`);
}
