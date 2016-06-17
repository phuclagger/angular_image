'use strict';

angular.module('imageUpload').component('imageUpload', {
    templateUrl:'views/image_upload/image_upload.html',
    controller: ['$scope', '$http', 'inputNameService', 'imageUploadService', function ImageUpload($scope ,$http, inputNameService, imageUploadService) {
        //TODO
        this.userName = inputNameService.getUserName();
        this.uploadImage = function () {
            var file = $scope.uploadedImage;
            var uploadUrl = '/image/upload';
            console.log(file);
            imageUploadService.uploadImageToUrl(file, uploadUrl);
        }
    }]
});