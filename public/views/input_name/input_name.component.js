'use strict';

angular.module('inputName').component('inputName', {
    templateUrl: 'views/input_name/input_name.html',
    controller: ['$scope' ,'$http', '$window', 'inputNameService',  function InputController($scope, $http, $window, inputNameService) {
        var self = this;  
        self.userName = "Your Name";        
        self.redirect = function () {
            inputNameService.setUserName(self.userName);
            $window.location.href = $window.location.href +  'main';
        }
    }]
});
