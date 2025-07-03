import { useState } from 'react';

function Component() {
  const [text, setText] = useState('initial text');
  const [number, setNumber] = useState(1);
  const [list, setList] = useState<string[]>([]);

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          // setText(1);
          // setNumber(23);
          setList(['hello', 'world']);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
