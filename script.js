function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {

        var listItem = document.createElement("li");
        listItem.className = "task-item";


        var taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;


        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            listItem.remove();
        };


        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);


        var todoList = document.getElementById("todo-list");
        todoList.appendChild(listItem);


        taskInput.value = "";
    }
}
