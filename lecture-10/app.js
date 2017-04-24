(function () {
  'use strict';

  // controller takes an array as function def
  // specifying parameters like helps during minification while using reserved parameters
  // like $scope
  angular.module("DIApp", [])
    .controller("DIController", ['$scope', '$filter', DIController]);

  // above can be done like this also
  // specifying paramters using $inject
  // angular.module("DIApp", [])
    // .controller("DIController", DIController);
  // DIController.$inject = ["$scope", "$filter"];

  function DIController ($scope, $filter) {
    $scope.name = "Moron";
    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  }
})();
