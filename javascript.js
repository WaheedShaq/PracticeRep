var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

//---------------------//

function inputLength() {
  return input.value.length;
}

//--------------------//

function createListElement() {
  if (inputLength() > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
}

//Creating delete button

var delBtn = document.createElement("button");
delBtn.addEventListener("click", delItem);
li.append(delBtn);

//------------------------//

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

//------------------------//

function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

//------------------------//
button.addEventListener("click", addListAfterClick());

input.addEventListener("keypress", addListAfterKeyPress);

// Unfinished shopping list exercise.
