const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');

const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    // Add task to list
    addTask(task);

    // Render tasks
    renderTask(task);

    // Update local storage
    updateStorage();

    formInput.value = '';
    return;
  }
  alert('Please enter a task description');
});

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;

  // Create a checkbox input element
  const taskCheckbox = document.createElement('input');

  // Set the input type to "checkbox"
  taskCheckbox.type = 'checkbox';

  // Set the initial checked state based on the task's completion status
  taskCheckbox.checked = task.isCompleted;

  // When the checkbox state changes (user toggles it),
  // update the task's completion status and save to localStorage
  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  // Add the checkbox to the task element in the DOM
  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
