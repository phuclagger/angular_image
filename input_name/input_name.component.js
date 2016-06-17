'use strict';

angular.module('inputName').component('inputName', {
    templateUrl: 'input_name/input_name.html',
    controller: ['$http', function InputController($http) {  
        this.name = "Your Name";
    }]
});
