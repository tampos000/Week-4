let tasks = [];

const taskInput = document.getElementById("task");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("list");
const emptyMessage = document.getElementById("message");

addButton.addEventListener("click", () => {

    const text = taskInput.value.trim();

    if (text === "") return;

    tasks.push({
        text: text,
        completed: false
    });
    taskInput.value = "";
    renderTasks();});
    
function renderTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        message.style.display = "block";
        return;
    }

    message.style.display = "none";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.dataset.index = index;

        li.innerHTML = `<span class="task-text">${task.text}</span>
        <button class="delete-btn">Delete</button>`;

        taskList.appendChild(li);
    });
}

taskList.addEventListener("click", (event) => {

    const li = event.target.closest("li");

    if (!li) return;

    const index = li.dataset.index;

    if (event.target.classList.contains("delete-btn")) {

        tasks.splice(index, 1);
        renderTasks();
        return;
    }
    if (event.target.classList.contains("task-text")) {

        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }
});
renderTasks();