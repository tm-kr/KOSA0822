const http = require('http');
 
http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello JavaScript');
}).listen(7777);