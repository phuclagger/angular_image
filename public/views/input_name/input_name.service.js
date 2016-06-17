angular.module('inputName').service('inputNameService', function () {
   var userName = 'Your Name';
   this.getUserName = function () {
       return userName;
   }

   this.setUserName = function (name) {
       userName = name;
   }
});