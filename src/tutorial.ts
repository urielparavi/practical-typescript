// function createString(arg: string): string {
//   return arg;
// }
// function createNumber(arg: number): number {
//   return arg;
// }

function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>('Hello world');
const someNumberValue = genericFunction<number>(2);
const someBooleanValue = genericFunction<boolean>(false);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'Hello world',
  getValue() {
    return this.value;
  },
};

async function someFunc(): Promise<number> {
  return 123;
}

const result = someFunc();
