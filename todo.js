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

btn.onclick = function () {
	let todo = document.getElementById("title").value;
	let description = document.getElementById("description").value;
	localStorage.setItem(todo, description);

	let newListItem = `<li>${todo}: ${localStorage.getItem(todo)}</li>`;
	listGroup.innerHTML += newListItem;

	console.log(localStorage.getItem(todo));
	console.log(`key is ${todo}`);
};
