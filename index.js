var todos = [];

function myTodo() {
  var inputElement = document.getElementById("input-box");
  todos.push("inputElement.value");
  inputElement.value = " ";
  showlist();
}

function showlist() {
  var listItem = document.getElementById("list-container");
  listItem.innerHTML = " ";
  for (var i = 0; i < todos.length; i++) {
    listItem.innerHTML += `<li> ${todos[i]} </li>`;
  }
}
