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
        console.log(tasks);

        todoForm.reset();
    }
});