const Contact = require('../model/contact');

module.exports.list = function(req, res, next) {
    Contact.find({})
        .then(function(contacts) {
            res.json(contacts);
        })
        .catch(next);
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
        if (err) {
            return next(err);
        }

        if (!contact) {
            return next();
        }

        res.json(contact);
    });
};

module.exports.delete = function(req, res, next) {
    let id = req.params.id;

    Contact.findByIdAndRemove(id, function(err, contact) {
        res.json(contact);
    });
};