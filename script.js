
const container = document.querySelector("#pageContainer");
const heading = document.querySelector("#mainHeading");
const message = document.querySelector("#messageArea");
const type = document.querySelector("#typing");

// Event Sources: the buttons that the user interacts with
const input = document.querySelector("#nameInput");
const gbutton = document.querySelector("#greetingButton");
const bbutton = document.querySelector("#backgroundButton");
const rbutton = document.querySelector("#resetButton");


// Event Handler: handles the greeting button click event
function displayGreeting() {
    const user = input.value.trim();

    if (user == "") {
        message.textContent = "Please enter your name";
    } else {
        heading.textContent = "Hello, " + user;
        message.textContent = "Greeting displayed successfully";
    }
}

// Event Handler: handles the background button click event
function changeBackground() {
    document.body.style.backgroundColor = "#2f3333";
    message.textContent = "Background changed successfully";
}

// Event Handler: handles the reset button click event
function reset() {
    heading.textContent = "Type your name";
    document.body.style.backgroundColor = "#d1eef0";
    input.value = "";
    message.textContent = "Type your name or try the buttons";
    type.textContent= "You are typing: ";
}

// Event Handler: handles the input event on the text field, updates the typing display in real time
function typing() {
    type.textContent = "You are typing: " + input.value;
}

// Event Handler: handles the mouseover event on buttons, logs which button is being hovered to the console
function showHoverMessage(event) {
    console.log("Mouse is over the " + event.target.textContent);
}

// Event Listeners
gbutton.addEventListener("click", displayGreeting); 
bbutton.addEventListener("click", changeBackground); 
rbutton.addEventListener("click", reset);     
input.addEventListener("input", typing);
gbutton.addEventListener("mouseover", showHoverMessage);
bbutton.addEventListener("mouseover", showHoverMessage);
rbutton.addEventListener("mouseover", showHoverMessage);
