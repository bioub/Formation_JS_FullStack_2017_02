const mongoose = require('mongoose');

let Contact = mongoose.model('contacts', {
    prenom: String,
    nom: String
});

module.exports = Contact;