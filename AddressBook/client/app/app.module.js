import 'bootstrap';
import angular from 'angular';
import contactListCtrlName from './contact-list/contact-list.controller';
import contactAddCtrlName from './contact-add/contact-add.controller';
import contactShowCtrlName from './contact-show/contact-show.controller';
import uiRouter from 'angular-ui-router';

let module = angular.module('app.module', [
    contactListCtrlName,
    contactAddCtrlName,
    contactShowCtrlName,

    uiRouter
]);

module.config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider.state('contact-list', {
        url: '/',
        controller: 'ContactListCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'app/contact-list/contact-list.template.html'
    });

    $stateProvider.state('contact-add', {
        url: '/contacts/add',
        controller: 'ContactAddCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'app/contact-add/contact-add.template.html'
    });

    $stateProvider.state('contact-show', {
        url: '/contacts/:id',
        controller: 'ContactShowCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'app/contact-show/contact-show.template.html'
    });


}]);