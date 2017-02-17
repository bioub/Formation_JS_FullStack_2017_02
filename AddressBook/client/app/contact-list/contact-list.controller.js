import angular from 'angular';

let module = angular.module('contact-list.controller', []);

class ContactListCtrl {
    constructor($http) {
        this.contacts = [];

        $http.get('/api/contacts')
            .then(res => {
               this.contacts = res.data;
            });
    }
}

ContactListCtrl.$inject = ['$http'];

module.controller('ContactListCtrl', ContactListCtrl);

export default module.name;