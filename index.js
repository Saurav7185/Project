let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push(taskText);
        taskInput.value = '';
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task}</span>
            <button class="delete" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

displayTasks();
