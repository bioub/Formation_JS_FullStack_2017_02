const express = require('express');
const mongoose = require('mongoose');
const contact = require('./route/contact');

mongoose.connect('mongodb://localhost/addressbook');

const app = express();

app.use('/api/contacts', contact);

app.listen(80, function() {
    console.log('Server listening');
});