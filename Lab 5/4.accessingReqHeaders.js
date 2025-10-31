const http = require('http');

http.createServer((req, res) => {
    console.log("Request Headers:", req.headers);
    res.end("Check the console for headers.");
}).listen(4000);