import angular from 'angular';

let module = angular.module('contact-list.controller', []);

class ContactListCtrl {
    constructor($http, $scope) {
        $http.get('/api/contacts')
            .then(res => {
               $scope.contacts = res.data;
            });
    }
}

ContactListCtrl.$inject = ['$http', '$scope'];

module.controller('ContactListCtrl', ContactListCtrl);

export default module.name;