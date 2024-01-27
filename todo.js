document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    function createTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const newTask = document.createElement("li");
            newTask.textContent = taskText;
            taskList.appendChild(newTask);
            taskInput.value = "";
        }
    }

    function checkTask(event) {
        const clickedElement = event.target;
        if (clickedElement.tagName === "LI") {
            clickedElement.classList.toggle("completed");
        }
    }

    addTaskBtn.addEventListener("click", createTask);
    taskList.addEventListener("click", checkTask);
});
