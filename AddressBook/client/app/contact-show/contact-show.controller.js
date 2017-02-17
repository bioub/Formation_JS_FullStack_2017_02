import angular from 'angular';
import uiRouter from 'angular-ui-router';

let module = angular.module('contact-show.controller', [
    uiRouter
]);

class ContactShowCtrl {
    constructor($http, $state) {
        $http.get('/api/contacts/' + $state.params.id)
            .then(res => {
                this.contact = res.data;
            })
    }
}

ContactShowCtrl.$inject = ['$http', '$state'];

module.controller('ContactShowCtrl', ContactShowCtrl);

export default module.name;