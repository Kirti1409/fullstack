const fs = require('fs');

const content = "Hello, students! Welcome to Node.js.";

let date = new Date()

fs.writeFile('output.txt', date, (err) => {
    if (err) {
        return console.log("Error writing file:", err);
    }
    console.log("File has been written successfully.");
});