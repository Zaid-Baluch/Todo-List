var todos = [];
var editIndex = -1;

function myTodo() {
  var inputElement = document.getElementById("input-box");
  if (inputElement.value === "") {
    alert("please Fill the box");
  }

  todos.push(inputElement.value);
  inputElement.value = "";
  showlist();
}

function showlist() {
  var listItem = document.getElementById("list-container");
  listItem.innerHTML = " ";
  for (var i = 0; i < todos.length; i++) {
    listItem.innerHTML += `
      <li class="todo-item">
        <span class="todo-text">${todos[i]}</span>
        <div class="todo-actions">
          <button onclick="editTodo(${i})" class="edit-btn">Edit</button>
          <button onclick="deleteTodo(${i})" class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
      </li>`;
  }
}
function deleteTodo(index) {
  todos.splice(index, 1);
  showlist();
}

function editTodo(index) {
  var inputElement = document.getElementById("input-box");
  inputElement.value = todos[index];
  editIndex = index;
  addBtn.style.display = "none";
  updateBtn.style.display = "inline-block";
}
function updateTodo() {
  var inputElement = document.getElementById("input-box");
  if (inputElement.value === "") {
    alert("please Fill the box");
  }

  todos[editIndex] = inputElement.value;
  inputElement.value = "";
  editIndex = -1;

  addBtn.style.display = "inline-block";
  updateBtn.style.display = "none";
  showlist();
}
