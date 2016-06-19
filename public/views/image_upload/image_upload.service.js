angular.module('imageUpload').service('imageUploadService', ['$http', function ($http) {
   this.uploadImageToUrl = function (file, uploadUrl,uploader, cb) {
       
       var fd = new FormData();
       fd.append('file', file);
       fd.append('uploader', uploader);
       $http.post(uploadUrl, fd, {
           transformRequest: angular.identity,
           headers: {'Content-Type' : undefined}
       })

       .success(function () {
           alert("Image uploaded successfully");
           cb();
       })

       .error(function () {
           alert("There was an error during the upload process");
           cb();
       });
   } 
   
  
   
}]);