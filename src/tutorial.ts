try {
  throw new Error('This is an error');
  // throw 'error by us';
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught an Error object: ${error.message}`);
  } else {
    console.log('unknown error...');
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const dateYear = checkInput(new Date());
const randomYearInString = checkInput('2022-05-05');

console.log(dateYear);
console.log(randomYearInString);
