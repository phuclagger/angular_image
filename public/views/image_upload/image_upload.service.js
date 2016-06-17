angular.module('imageUpload').service('imageUploadService', ['$http', function ($http) {
   this.uploadImageToUrl = function (file, uploadUrl) {
       var fd = new FormData();
       fd.append('file', file);
       $http.post(uploadUrl, fd, {
           transformRequest: angular.identity,
           headers: {'Content-Type' : undefined}
       })

       .success(function () {
           alert("SUCCESS");
       })

       .error(function () {
           alert("ERROR");
       });
   } 
}]);