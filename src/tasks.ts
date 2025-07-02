const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');

const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

const task: Task[] = [];

// Since this is a named function used as an event handler,
// we must explicitly annotate the type of the 'event' parameter.
// TypeScript cannot infer it automatically in this case,
// unlike with inline functions passed directly to addEventListener,
// where the event type is inferred from the context.
function createTask(event: SubmitEvent) {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    console.log(taskDescription);

    formInput.value = '';
    return;
  }
  alert('Please enter a task description');
}

taskForm?.addEventListener('submit', createTask);

// taskForm?.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const taskDescription = formInput?.value;
//   if (taskDescription) {
//     console.log(taskDescription);

//     formInput.value = '';
//     return;
//   }
//   alert('Please enter a task description');
// });
