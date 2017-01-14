(function () {
  'use strict';
  angular.module("DIApp", [])
    .controller("DIController", ["$scope", "$filter", "$injector", DIController]);

  // DIController.$inject = ["$scope", "$filter", "$injector"]
  function DIController ($scope, $filter, $injector) {
    $scope.name = "";

    $scope.upper = function () {
      $scope.name = $filter("uppercase")($scope.name)
    }
    // console.log($injector.annotate(DIController));
    // console.log($filter);
  }

  function AnnotateMe(name, job, blah) {
    return "Blah!"
  }

  // console.log(DIController.toString());
})();
