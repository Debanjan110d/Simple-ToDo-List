// let btn = document.getElementById("btn");
// let listGroup = document.getElementById("list-group");
// let todoList = [];
// let todo = "";
// let description = "";
// let newListItem = "";
// let todoListHtml = "";
// let todoListStorage = JSON.parse(localStorage.getItem("todoList"));

// if (todoListStorage) {
// 	todoList = todoListStorage;
// 	todoList.forEach((todo) => {
// 		newListItem = `<div id="huha"><li>${todo.title}: ${todo.description}</li> <button class="deleteButton">Delete</button></div>`;
// 		todoListHtml += newListItem;
// 	});
// 	listGroup.innerHTML = todoListHtml;
// }

// btn.onclick = () => {
// 	todo = document.getElementById("title").value;
// 	description = document.getElementById("description").value;
// 	todoList.push({ title: todo, description: description });
// 	localStorage.setItem("todoList", JSON.stringify(todoList));
// 	newListItem = `<li>${todo}: ${description}</li>`;
// 	listGroup.innerHTML += newListItem;
// };

// deleteButton.onclick = () => {
// 	document.getElementById("title").value.remove();
// };

// listGroup.addEventListener("click", (e) => {
// 	if (e.target.classList.contains("deleteButton")) {
// 		let index = e.target.getAttribute("data-index");
// 		todoList.splice(index, 1);
// 		localStorage.setItem("todoList", JSON.stringify(todoList));
// 		listGroup.innerHTML = "";
// 		todoList.forEach((todo) => {
// 			newListItem = `<div id="huha"><li>${todo.title}: ${
// 				todo.description
// 			}</li> <button class="deleteButton" data-index="${todoList.indexOf(
// 				todo
// 			)}">Delete</button></div>`;
// 			listGroup.innerHTML += newListItem;
// 		});
// 	}
// });

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
	renderTodoList();
}

btn.onclick = () => {
	todo = document.getElementById("title").value;
	description = document.getElementById("description").value;
	todoList.push({ title: todo, description: description });
	localStorage.setItem("todoList", JSON.stringify(todoList));
	renderTodoList();

	// Clear input fields

	document.getElementById("title").value = "";
	document.getElementById("description").value = "";
};

listGroup.addEventListener("click", (e) => {
	if (e.target.classList.contains("deleteButton")) {
		let index = e.target.parentNode.getAttribute("data-index");
		todoList.splice(index, 1);
		localStorage.setItem("todoList", JSON.stringify(todoList));
		renderTodoList();
	}
});

function renderTodoList() {
	listGroup.innerHTML = "";
	todoList.forEach((todo, index) => {
		newListItem = `
      <div  data-index="${index}">
        <li class="each-list">${todo.title}: ${todo.description}</li>
        <button class="deleteButton">Delete</button>
      </div>
    `;
		listGroup.innerHTML += newListItem;
	});
}
let sum = 0;
todoList.forEach((todo) => {
	let number = parseFloat(todo.description);
	if (!isNaN(number)) {
		sum += number;
	}
});
