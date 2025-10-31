const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Home Page!');
    } else if (req.url === '/about') {
        res.end('About Us Page');
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});