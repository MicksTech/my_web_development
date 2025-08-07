
document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('input-group');
    const todoInput = document.getElementById('toggleBtn');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const task = todoInput.value.trim();
        if (task !== '') {
            addTask(task);
            todoInput.value = '';
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'delete-btn';
        delBtn.onclick = function () {
            todoList.removeChild(li);
        };
        li.appendChild(delBtn);
        todoList.appendChild(li);
    }
});
