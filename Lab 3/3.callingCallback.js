function divide(a, b, callback) {
    if (b === 0) {
        callback("Cannot divide by zero");
    } else {
        console.log(a / b)
    }
}

function errorCallback(errorMessage) {
    console.log(errorMessage);
}

divide(10, 2, errorCallback);