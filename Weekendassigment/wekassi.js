const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask(description) {
  const task = { description, completed: false };
  tasks.push(task);
  console.log(`Task added: ${description}`);
}

function displayTasks() {
  console.log('Tasks:');
  tasks.forEach((task, index) => {
    const status = task.completed ? '[X]' : '[ ]';
    console.log(`${index + 1}. ${status} ${task.description}`);
  });
}

function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    const deletedTask = tasks.splice(index, 1);
    console.log(`Deleted task: ${deletedTask[0].description}`);
  } else {
    console.log('Invalid task index.');
  }
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log(`Marked task as completed: ${tasks[index].description}`);
  } else {
    console.log('Invalid task index.');
  }
}

function searchTasks(keyword) {
  const matchingTasks = tasks.filter(task =>
    task.description.toLowerCase().includes(keyword.toLowerCase())
  );

  if (matchingTasks.length > 0) {
    console.log(`Tasks containing "${keyword}":`);
    matchingTasks.forEach((task, index) => {
      const status = task.completed ? '[X]' : '[ ]';
      console.log(`${index + 1}. ${status} ${task.description}`);
    });
  } else {
    console.log(`No tasks found containing "${keyword}".`);
  }
}

// we can use also switch statement
function startCLI() {
  console.log('To-Do List Manager\n');
  rl.question('Enter a command (add, list, delete, complete, search, exit): ', command => {
    if (command.toLowerCase() === 'add') {
      rl.question('Enter a task description: ', description => {
        addTask(description);
        startCLI();
      });
    } else if (command.toLowerCase() === 'list') {
      displayTasks();
      startCLI();
    } else if (command.toLowerCase() === 'delete') {
      rl.question('Enter the task number to delete: ', index => {
        deleteTask(index - 1);
        startCLI();
      });
    } else if (command.toLowerCase() === 'complete') {
      rl.question('Enter the task number to mark as completed: ', index => {
        completeTask(index - 1);
        startCLI();
      });
    } else if (command.toLowerCase() === 'search') {
      rl.question('Enter a keyword to search for tasks: ', keyword => {
        searchTasks(keyword);
        startCLI();
      });
    } else if (command.toLowerCase() === 'exit') {
      console.log('Exiting...');
      rl.close();
    } else {
      console.log('Invalid command. Please try again.');
      startCLI();
    }
  });
}

startCLI();
