import { useState } from 'react';

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: 'some url 1',
    text: 'some text 1',
  },
  {
    id: 2,
    url: 'some url 2',
    text: 'some text 2',
  },
  {
    id: 3,
    url: 'some url 3',
    text: 'some text 3',
  },
];

function Component() {
  const [text, setText] = useState('initial text');
  const [number, setNumber] = useState(1);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          // setText(1);
          // setNumber(23);
          // setList(['hello', 'world']);
          setLinks([
            ...links,
            { id: 4, url: 'hello', text: 'hello from text' },
          ]);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
