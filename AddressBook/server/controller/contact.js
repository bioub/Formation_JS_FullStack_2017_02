const Contact = require('../model/contact');

module.exports.list = function(req, res, next) {
    Contact.find({}, function(err, contacts) {
        res.json(contacts);
    });
};

module.exports.add = function(req, res, next) {
    let contact = new Contact(req.body);
    contact.save(function(err, contact) {
        res.statusCode = 201;
        res.json(contact);
    });
};

module.exports.show = function(req, res, next) {
    let id = req.params.id;

    Contact.findById(id, function(err, contact) {
        res.json(contact);
    });
};

module.exports.delete = function(req, res, next) {
    let id = req.params.id;

    Contact.findByIdAndRemove(id, function(err, contact) {
        res.json(contact);
    });
};