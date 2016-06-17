'use strict';

angular.module('imageApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/', {    
                template: "<input-name></input-name>"
            }).
            when('/main', {
                template: "<image-upload></image-upload>"
            }).otherwise('/');
    }]);