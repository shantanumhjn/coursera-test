(function () {
  'use strict';

  angular.module("myFirstApp", [])
    .controller('MyFirstController', function ($scope) {
      $scope.name = 'Hello';
      $scope.sayHello = function (name) {
        return name;
      };
    }
  );

})();
