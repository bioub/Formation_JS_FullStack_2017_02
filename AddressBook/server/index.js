const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const contact = require('./route/contact');

mongoose.connect('mongodb://localhost/addressbook');
mongoose.Promise = Promise;

const app = express();

app.use(express.static(path.resolve(__dirname + '/../client')));
app.use('/api/contacts', contact);

// 404
app.use('/api', function(req, res, next) {
    res.statusCode = 404;
    res.json({
        message: 'Not Found'
    });
});

// 500
app.use('/api', function(err, req, res, next) {
    res.statusCode = 500;
    res.json(err);
});

app.listen(80, function() {
    console.log('Server listening');
});