const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");

let tasks = [];
todoForm.addEventListener("submit", function(e){
    e.preventDefault();

    const input = this.taskInput;
    const inputValue = input.value;

    if (inputValue !== ""){
        const task = {
            id: new Date().getTime(),
            name: inputValue,
            isCompleted: false
        };

        tasks.push(task);
        createTask(task);
        console.log(tasks);

        todoForm.reset();
    }
});

function createTask(task){
    const taskEl = document.createElement("li");
    taskEl.setAttribute("id", task.id);

    taskEl.innerHTML= `
    <input type="checkbox" ${task.isCompleted ? "checked" : ""}>
    <span>${task.name}</span>
    <button class="remove-task">Delete</button>
    `;

    todoList.appendChild(taskEl);
}