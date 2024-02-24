document.querySelector(".js-add-btn").addEventListener("click", () => {
  addTodo();
});

document
  .querySelector(".js-todo-input")
  .addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      addTodo();
    }
  });

let todoList = [];
function addTodo() {
  const inputTodoElament = document.querySelector(".js-todo-input");
  const todoName = inputTodoElament.value;
  const inputDateElament = document.querySelector(".js-date-input");
  const dueDate = inputDateElament.value;
  const inputTimeElament = document.querySelector(".js-time-input");
  const todoTime = inputTimeElament.value;
  inputDateElament.value = "";
  inputTodoElament.value = "";
  inputTimeElament.value = "";
  todoList.push({ todoName, dueDate, todoTime });
  renderTodo();
}

let toDoObj = "";
function renderTodo() {
  let todoListHTML = "";
  todoList.forEach((toDoObj, index) => {
    const { todoName, dueDate, todoTime } = toDoObj;
    const html = `<div>${toDoObj.todoName}</div>
    <div class="todo-item">${toDoObj.dueDate}</div>
    <div class="todo-item">${toDoObj.todoTime}</div>
    <button class='js-delete-btn delete-btn'>Delete</button>`;
    todoListHTML += html;
  });
  document.querySelector(".js-display-todo").innerHTML = todoListHTML;
  document.querySelectorAll(".js-delete-btn").forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
      todoList.splice(index, 1);
      renderTodo();
    });
  });
}
