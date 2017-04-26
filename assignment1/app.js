(function () {
  'use strict';
  angular.module("LunchChecker", [])
    .controller("LCController", LCController);

  LCController.$inject = ["$scope"];
  function LCController($scope) {
    $scope.lunchInput = "";
    $scope.outputMessage = "";
    $scope.outputStyle = {};
    $scope.borderStyle = {};

    $scope.checkLunchAndShow = function () {
      $scope.outputStyle = {color: "green"};
      $scope.borderStyle = {'border-color':'green'};
      var count = checkLunch($scope.lunchInput);
      if (count < 1) {
        $scope.outputStyle = {color: "red"}
        $scope.borderStyle = {'border-color':'red'};
        $scope.outputMessage = "Please enter data first";
      } else if (count < 4) {
        $scope.outputMessage = "Enjoy!";
      } else {
        $scope.outputMessage = "Too much!";
      }
    }

    function checkLunch(string) {
      var items = string.split(",");
      items = items.filter(function (food) {
        return food.trim().length > 0;
      });
      return items.length
    }
  }
})();
