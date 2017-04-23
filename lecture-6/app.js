(function () {
  'use strict';

  angular.module("NameCaculator", [])
    .controller("NameCaculatorController", function ($scope) {
      $scope.name = "";
      $scope.totalValue = 0;
      $scope.displayNumeric = function () {

        $scope.totalValue = calculateNumericForString($scope.name)
      };

      function calculateNumericForString(string) {
        var val = 0;
        for (var i = 0; i < string.length; i++) {
          val += string.charCodeAt(i);
        }
        return val;
      };
    });
})();
