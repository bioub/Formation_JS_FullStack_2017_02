import angular from 'angular';
import uiRouter from 'angular-ui-router';

let module = angular.module('contact-add.controller', [
    uiRouter
]);

class ContactAddCtrl {
    constructor($http, $state) {
        this.$http = $http;
        this.$state = $state;
    }
    add() {
        this.$http.post('/api/contacts', this.contact)
            .then(res => {
                this.$state.go('contact-list');
            });
    }
}

ContactAddCtrl.$inject = ['$http', '$state'];

module.controller('ContactAddCtrl', ContactAddCtrl);

export default module.name;