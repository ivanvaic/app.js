// Fetch DOM elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Load tasks from localStorage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.toggle("completed", task.completed);

        li.innerHTML = `
            ${task.text}
            <div>
                <button onclick="toggleTask(${index})">✔️</button>
                <button onclick="deleteTask(${index})">❌</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

// Add new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const newTask = {
            text: taskText,
            completed: false
        };
        tasks.push(newTask);
        taskInput.value = "";
        updateLocalStorage();
        renderTasks();
    }
}

// Toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateLocalStorage();
    renderTasks();
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    updateLocalStorage();
    renderTasks();
}

// Update tasks in localStorage
function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Event listener for adding task
addTaskButton.addEventListener("click", addTask);

// Render tasks initially
renderTasks();
