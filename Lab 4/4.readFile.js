const fs = require('fs');

fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log("Error reading file:", err);
    }
    console.log("File content:", data);
});