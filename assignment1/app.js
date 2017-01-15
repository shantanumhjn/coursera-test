(function () {
  'use strict';
  angular.module("MyApp", [])
    .controller("MyCtrl", MyCtrl);

  function MyCtrl($scope) {
    $scope.uinput = "";
    $scope.output = "";

    $scope.check = function() {
      var numItems = count($scope.uinput, ',');
      if (numItems == 0) {
        $scope.output = "Please enter data first"
      } else if (numItems <= 3) {
        $scope.output = "Enjoy!";
      } else {
        $scope.output = "Too Much!";
      }
    };

    function count(str, dl) {
      var count = 0
      var list = str.split(dl);
      for (var i = 0; i < list.length; i++) {
        if (list[i].length > 0) count += 1;
      }
      return count;
    }
  }
})();
