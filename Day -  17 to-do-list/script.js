function addTodo() {
    var newTodoText = document.getElementById("new-todo").value;

    if (newTodoText.trim() !== "") {
        var todoList = document.getElementById("todo-list");
        var listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.innerHTML = `
            <input type="checkbox">
            <span>${newTodoText}</span>
            <button onclick="removeTodo(this)">Remove</button>
        `;
        todoList.appendChild(listItem);
        document.getElementById("new-todo").value = "";
    }
}

function removeTodo(button) {
    var listItem = button.parentNode;
    var todoList = document.getElementById("todo-list");
    todoList.removeChild(listItem);
}
