// let btn = document.getElementById("btn");
// let inhtml = "";
// btn.onclick = function () {
// 	let todo = document.getElementById("title").value;
// 	let description = document.getElementById("description").value;
// 	localStorage.setItem(todo, description);

// 	inhtml = `<li>${todo}: ${localStorage.getItem(todo)}</li>`;

// 	console.log(localStorage.getItem(todo));
// 	console.log(`key is ${todo}`);

// 	document.getElementById("list-group").innerHTML = inhtml;
// };

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
// btn.onclick = function () {
// 	let todo = document.getElementById("title").value;
// 	let description = document.getElementById("description").value;
// 	localStorage.setItem(todo, description);

// 	let newListItem = `<li>${todo}: ${localStorage.getItem(todo)}</li>`;
// 	listGroup.innerHTML += newListItem;

// 	console.log(localStorage.getItem(todo));
// 	console.log(`key is ${todo}`);
// };
