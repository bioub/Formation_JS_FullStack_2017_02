import 'bootstrap';
import angular from 'angular';
import contactListCtrlName from './contact-list/contact-list.controller';

let module = angular.module('app.module', [
    contactListCtrlName
]);

