function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log('no string provided');
  }
}

printLength('hello');
printLength('');
printLength(null);
printLength();
printLength(undefined);
