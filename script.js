function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    if (newTaskInput.value.trim() !== '') {
        const task = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskText = document.createElement('span');
        taskText.textContent = newTaskInput.value;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            const updatedText = prompt('Edit task:', taskText.textContent);
            if (updatedText !== null) {
                taskText.textContent = updatedText;
            }
        };
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            task.remove();
        };
        task.appendChild(checkbox);
        task.appendChild(taskText);
        task.appendChild(editButton);
        task.appendChild(removeButton);
        checkbox.onchange = function () {
            taskText.classList.toggle('completed', checkbox.checked);
        };
        taskList.appendChild(task);
        newTaskInput.value = '';
    }
}