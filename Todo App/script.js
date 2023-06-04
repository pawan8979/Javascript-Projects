const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addToDo(event.target.value);
    event.target.value = "";
  }
});

const addToDo = (item) => {
  const list = document.createElement("li");
  list.innerHTML = `${item}
        <i class="cross fas fa-times"></i>`;

  list.addEventListener("click", () => list.classList.toggle("done"));

  list.querySelector("i").addEventListener("click", () => {
    list.remove();
    saveTodosToLocalStorage();
  });

  toDoBox.appendChild(list);
  saveTodosToLocalStorage();
};

const addEventListenersToTodos = () => {
  const todos = document.querySelectorAll("#to-do-box li");
  todos.forEach((todo) => {
    todo.addEventListener("click", () => todo.classList.toggle("done"));
    const cross = todo.querySelector(".cross");
    cross.addEventListener("click", () => {
      todo.remove();
      saveTodosToLocalStorage();
    });
  });
};

const saveTodosToLocalStorage = () => {
  const todos = toDoBox.innerHTML;
  localStorage.setItem("todos", todos);
};

// Retrieve todos from local storage when the page loads
(function () {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    toDoBox.innerHTML = savedTodos;
    addEventListenersToTodos();
  }
})();
