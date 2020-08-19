// Selectors
const ul = document.querySelector('ul');
const todoBtn = document.querySelector('.todo-button');
const clearBtn = document.querySelector('.clear');
const input = document.querySelector('#item');

// Checking localstorage for the data
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

// Creating a function to add li
const liMaker = (text) => {
	const li = document.createElement('li');
	li.innerHTML = text;
	ul.appendChild(li);
}

// AddeventListener
todoBtn.addEventListener('click', function(e){
	e.preventDefault();
	console.log('todobtn clicked');

	// Saving the data in localstorage
	itemsArray.push(input.value);
	localStorage.setItem('items', JSON.stringify(itemsArray));

	liMaker(input.value);
	input.value = "";
})

// Getting data from the localstorage
data.forEach((item) => {
	liMaker(item)
})

// Clearing data from the localstorage
clearBtn.addEventListener('click', function() {
	localStorage.clear();
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild)
		console.log(ul.firstChild);
	}
	itemsArray = [];
})