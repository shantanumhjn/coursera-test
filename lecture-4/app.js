// IIFE - immediately invoked function expression
(function () {
'use sctrict';

  // define app
  angular.module('myFirstApp', [])
    .controller('MyFirstController', function ($scope){
      $scope.name = "Moron";
      $scope.sayHello = function () {
        return "Hello Moron";
      };
  });

})();
