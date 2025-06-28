function processInput(input: string | number) {
  if (typeof input === 'number') {
    console.log(input * 2);
  } else {
    console.log(input.toLocaleLowerCase());
  }
}

processInput(10);
processInput('Hello');
