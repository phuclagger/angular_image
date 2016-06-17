'use strict';

angular.module('imageUpload').component('imageUpload', {
    templateUrl:'views/image_upload/image_upload.html',
    controller: ['$http', 'inputNameService', function ImageUpload($http, inputNameService) {
        //TODO
        this.userName = inputNameService.getUserName();
        this.uploadImage = function (params) {
            
        }
    }]
})