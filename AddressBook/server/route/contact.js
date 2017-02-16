const Router = require('express').Router;
const controller = require('../controller/contact');

const routes = new Router();

routes.get('/', controller.list);
routes.get('/:id', controller.show);

module.exports = routes;