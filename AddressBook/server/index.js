const express = require('express');
const contact = require('./route/contact');

const app = express();

app.use('/api/contacts', contact);

app.listen(80, function() {
    console.log('Server listening');
});