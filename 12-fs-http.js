const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('Here is our short History')
    }
    res.end(`<h3>Oops! </h3>
    
    <p> We can't seem to find the page you are looking for</p>
    <a href="/">back home </a>`)


})

server.listen(5000)