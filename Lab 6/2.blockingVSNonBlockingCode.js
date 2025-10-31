// Blocking code
// const fs = require('fs');

// const data = fs.readFileSync('bigfile.txt', 'utf8');
// console.log("File content:", data);
// console.log("This runs **after** the file is read.");


// Non Blocking Code
const fs = require('fs');

fs.readFile('bigfile.txt', 'utf8', (err, data) => {
    if (err) return console.log(err);
    console.log("File content:", data);
});

console.log("This runs **immediately**, while file is being read.");