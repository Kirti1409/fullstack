const http = require('http');
const https = require('https');

const server = http.createServer((req, res) => {
    const options = {
        hostname: 'jsonplaceholder.typicode.com',
        path: '/todos/1',
        method: 'GET'
    };

    const proxy = https.request(options, (proxyRes) => {
        let data = '';
        proxyRes.on('data', chunk => data += chunk);
        proxyRes.on('end', () => {
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
        });
    });

    proxy.on('error', (err) => {
        res.statusCode = 500;
        res.end('Error in gateway: ' + err.message);
    });

    proxy.end();
});

server.listen(5000, () => {
    console.log("Gateway server running on http://localhost:5000");
});