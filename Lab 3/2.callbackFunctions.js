function callbackFunction() {
    console.log("Callback function called!");
}

function greetUser(name, callback) {
    console.log("Hi", name);
    callback();
}

greetUser("John", callbackFunction);