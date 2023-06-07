var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("list");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var div = document.createElement("div")
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);	
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("delClass");
	delButton.innerHTML = "Del";
	div.append(li, delButton)
}

function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
	}
}

function doneTask(element){
	if(element.target.className === "taskClass"){
		element.target.classList.toggle("done");
	}
}

function deleteListElement(element){
	if(element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUIClick(element){
	doneTask(element);
	deleteListElement(element);
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

ul.addEventListener("click", handleUIClick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

