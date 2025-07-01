function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

let result = pair(123, 'Hello');

//  const [name,setName] = useState('')
//  const [products,setProducts] = useState<Product[]>([])

// type constraint on the generic type T, generic type can be either a number or a string.

function processValue<T extends string | number>(value: T): T {
  console.log(value);
  return value;
}

processValue('hello');
processValue(12);
