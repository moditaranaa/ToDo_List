document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const taskCount = document.getElementById("taskCount");

    let totalTasks = 0;

    addButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = "";
            updateTaskCount(1);
        }
    }

    function createTaskItem(taskText) {
        const taskItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) { taskItem.style.textDecoration = "line-through";
            } else {
                taskItem.style.textDecoration = "none";
            }
        });

        const taskLabel = document.createElement("span");
        taskLabel.innerText = taskText;
        
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
            updateTaskCount(-1);
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);
        return taskItem;
    }
/* TASK COUNT FUNCTION */
    function updateTaskCount(change) {
        totalTasks += change;
        taskCount.innerText = `Total Tasks: ${totalTasks}`;
    }
});
