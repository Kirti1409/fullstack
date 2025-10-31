const fs = require('fs');

const readable = fs.createReadStream('input.txt', 'utf8');
const writable = fs.createWriteStream('output.txt');

readable.pipe(writable); // Connect input to output