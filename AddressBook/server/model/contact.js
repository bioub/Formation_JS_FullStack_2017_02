const mongoose = require('mongoose');

let Contact = mongoose.model('contacts', {
    prenom: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    email: String,
    telephone: String
});

module.exports = Contact;