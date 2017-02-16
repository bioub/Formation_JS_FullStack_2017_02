
const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(morgan('dev'));
/*
server.use(function(req, res, next) {
    console.log(req.method + ' ' + req.url);
    next();
});
*/

server.use(function(req, res, next) {
    res.setHeader('Content-type', 'text/plain');
    next();
});

server.get('/', function(req, res) {
    res.send('Hello');
});

server.get('/toto', function(req, res) {
    res.send('Hello Toto !!!');
});

// 404 Middleware
server.use(function(req, res, next) {
    res.statusCode = 404;
    res.send('Erreur 404');
});

server.listen(8080, function() {
    console.log('Server listening');
});