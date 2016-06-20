'use strict';

angular.module('imageUpload').component('imageUpload', {
    templateUrl:'views/image_upload/image_upload.html',
    controller: ['$scope', '$http', 'inputNameService', 'imageUploadService', function ImageUpload($scope ,$http, inputNameService, imageUploadService) {        
        var self = this;
        self.images = [];
        $scope.images = [];
        //Scope for filter/search/sort
        $scope.sortType = 'filename';
        $scope.sortReverse = false;
        $scope.searchString = '';
        
        //Scope for paging
        $scope.filteredImages = [];
        $scope.currentPage = 1;
        $scope.numPerPage = 5;
        $scope.maxSize = 5;

        self.setImage = function setImage(imageUrl) {
            self.mainImage = imageUrl;
        };        
                
        var getImage = function () {
            $http.get('/imageList').then(function(res){
                self.images = res.data; 
                $scope.images = res.data;    
                $scope.$watch('currentPage + numPerPage', function () {                            
                    var begin = (($scope.currentPage - 1) * $scope.numPerPage);
                    var end = begin + $scope.numPerPage;            
                    $scope.filteredImages = $scope.images.slice(begin, end);     
                    self.setImage($scope.filteredImages[0]);                              
                 });        
                                    
            });        
        }
        
        this.userName = inputNameService.getUserName();
        this.uploadImage = function () {
            var file = $scope.uploadedImage;
            var uploadUrl = '/image/upload';
            console.log(file);
            imageUploadService.uploadImageToUrl(file, uploadUrl, this.userName, function () {
                getImage();        
            });
        }
        
        
        getImage();                        
    }]
});