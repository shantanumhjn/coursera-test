(function () {
  'use strict';
  angular.module("DIApp", [])
    .controller("DIController", DIController)
    .controller("DIController2", DIController2);

  function DIController ($scope, $filter) {
    $scope.name = "Moron";
    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  }

  function DIController2 ($injector) {
    console.log($injector.annotate(DIController2));
  }

  function AnnotateMe(name, job, blah) {
    return 'Blah!';
  }

  console.log(AnnotateMe());
  console.log(AnnotateMe);
  console.log(AnnotateMe.toString());
  console.log(DIController.toString());
  console.log(DIController2.toString());
  // DIController2(); -- fails because injector is not injected yet
})();
