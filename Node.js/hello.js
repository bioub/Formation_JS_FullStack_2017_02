const http = require('http');

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');

    switch (req.url) {
        case '/':
            res.end('Hello');
            break;
        case '/toto':
            res.end('Hello Toto !!!');
            break;
        default:
            res.statusCode = 404;
            res.end('Page not found');
    }

});

server.listen(8080, function() {
   console.log('Server listening');
});