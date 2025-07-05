import { useState } from 'react';
import { type Task } from './types';
import Form from './Form';
import List from './List';

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  return (
    <section>
      <Form addTask={addTask} />
      <List />
    </section>
  );
}
export default Component;
