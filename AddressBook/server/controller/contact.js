const contacts = require('../model/contact');

module.exports.list = function(req, res, next) {
    res.json(contacts);
};

module.exports.show = function(req, res, next) {
    let id = Number(req.params.id);
    let contact = contacts.find(c => id === c.id);

    if (!contact) {
        return next();
    }

    res.json(contact);
};
