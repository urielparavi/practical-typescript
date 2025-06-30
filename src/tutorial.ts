let unknownValue: unknown;

unknownValue = 'hello';
unknownValue = [1, 2, 3];
unknownValue = 42.33455;

if (typeof unknownValue === 'number') {
  unknownValue.toFixed(2);
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('there was error...');
  } else {
    throw 'some error';
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}
