var todos = [];
var editIndex = -1;

function myTodo() {
  var inputElement = document.getElementById("input-box");
  todos.push(inputElement.value);
  inputElement.value = "";
  showlist();
}

function showlist() {
  var listItem = document.getElementById("list-container");
  listItem.innerHTML = " ";
  for (var i = 0; i < todos.length; i++) {
    listItem.innerHTML += `
    <li>
    ${todos[i]}
    <button onclick="deleteTodo(${i})"><i class="fa-solid fa-trash"></i></button>
    <button onclick="editTodo(${i})">Edit</button>
    </li>`;
  }
}
function deleteTodo(index) {
  todos.splice(index, 1);
  showlist();
}

function editTodo() {
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
