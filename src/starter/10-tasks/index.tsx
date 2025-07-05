import { useState } from 'react';
import { type Task } from './types';
import Form from './Form';
import List from './List';

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <section>
      <Form />
      <List />
    </section>
  );
}
export default Component;
