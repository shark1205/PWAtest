document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
  }
  loadTasks();
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value;
  if (!task) return;
  saveTask(task);
  taskInput.value = '';
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  loadTasks();
}

function loadTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task;
      taskList.appendChild(li);
  });
}