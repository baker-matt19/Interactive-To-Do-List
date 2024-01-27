let tasks = [];

function openModal() {
  document.getElementById("addTaskModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("addTaskModal").style.display = "none";
  document.getElementById("editTaskModal").style.display = "none";
}

function addTask() {
  const title = document.getElementById("taskTitle").value;
  const date = document.getElementById("taskDate").value;

  if (title && date) {
    tasks.push({ title, date, completed: false });
    renderTasks();
    closeModal();
  }
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className = `task ${task.completed ? "completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTask(index));

    const taskText = document.createElement("span");
    taskText.textContent = `${task.title} - ${task.date}`;

    const editButton = document.createElement("button");
    editButton.className = "btn";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => openEditModal(index));

    const removeButton = document.createElement("button");
    removeButton.className = "btn";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeTask(index));

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function openEditModal(index) {
  document.getElementById("editTaskTitle").value = tasks[index].title;
  document.getElementById("editTaskDate").value = tasks[index].date;

  document.getElementById("editTaskModal").style.display = "flex";

  const saveChangesButton = document.getElementById("saveChangesButton");
  saveChangesButton.onclick = () => saveChanges(index);
}

function saveChanges(index) {
  const title = document.getElementById("editTaskTitle").value;
  const date = document.getElementById("editTaskDate").value;

  if (title && date) {
    tasks[index].title = title;
    tasks[index].date = date;
    renderTasks();
    closeModal();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initial render
renderTasks();

function clearAddTaskInputs() {
  document.getElementById("task-name").value = "";
  document.getElementById("task-date").value = "";
}
