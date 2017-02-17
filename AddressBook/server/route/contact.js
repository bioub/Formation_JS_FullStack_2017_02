const Router = require('express').Router;
const bodyParser = require('body-parser');
const controller = require('../controller/contact');

const routes = new Router();

// List
routes.get('/', controller.list);
// Add
routes.post('/', bodyParser.json(), controller.add);
// Show
routes.get('/:id', controller.show);
// Delete
routes.delete('/:id', controller.delete);

module.exports = routes;