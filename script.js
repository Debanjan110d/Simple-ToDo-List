let btn = document.getElementById("btn");
let listGroup = document.getElementById("list-group");
let todoList = [];
let todo = "";
let description = "";
let newListItem = "";
let todoListHtml = "";
let todoListStorage = JSON.parse(localStorage.getItem("todoList"));

if (todoListStorage) {
	todoList = todoListStorage;
	todoList.forEach((todo) => {
		newListItem = `<li>${todo.title}: ${todo.description}</li>`;
		todoListHtml += newListItem;
	});
	listGroup.innerHTML = todoListHtml;
}

btn.onclick = function () {
	todo = document.getElementById("title").value;
	description = document.getElementById("description").value;
	todoList.push({ title: todo, description: description });
	localStorage.setItem("todoList", JSON.stringify(todoList));
	newListItem = `<li>${todo}: ${description}</li>`;
	listGroup.innerHTML += newListItem;
};
