(function () {
  'use strict';

  angular.module("MsgApp", [])
    .controller("MsgController", MsgController);

  function MsgController($scope) {
    $scope.name = "Somebody";
    $scope.stateOfBeing = "hungry";
    $scope.button = "Feed Me"

    $scope.feedMe = function () {
      if ($scope.stateOfBeing == "hungry") {
        $scope.stateOfBeing = "fed";
        $scope.button = "Back";
      } else {
        $scope.stateOfBeing = "hungry";
        $scope.button = "Feed Me";
      }
    };
  }
})();
