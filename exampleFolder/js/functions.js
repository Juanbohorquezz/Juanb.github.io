// variable review
let greeting = "Good Evening";
console.log(greeting);

// Simple Function
function greet() {
    console.log(greeting);
}

greet();

// Fucntion with an imput parameter
function greetUser(username) {
    let userGreeting = greeting + username;
    console.log(userGreeting);
}

greetUser(", JuanB");

// Function with input parameter
// that modifies the page
function greetUserOnPage(username){
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = greeting + ", " + username + "! ";
}

greetUserOnPage("JuanB");

// Function that outputs (or "returns") a value
function getUserGreeting(username) {
    return greeting + ", " + username + "! How can I help you?";
}

getUserGreeting("JuanB");
console.log(
    getUserGreeting("JuanB")
);

// Function using another function
// that modifies the page
function greetUserOnPageV2(username) {
    let greeting = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = getUserGreeting(username);
}

greetUserOnPageV2("Juan Bohorquez")