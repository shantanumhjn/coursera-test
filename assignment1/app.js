(function () {
  'use strict';
  angular.module("MyApp", [])
    .controller("MyCtrl", MyCtrl);

  function MyCtrl($scope) {
    $scope.uinput = "";
    $scope.output = "";

    $scope.check = function() {
      var numItems = count($scope.uinput, ',');
      $scope.buttonStyle = {"border-color": "green"};
      if (numItems == 0) {
        $scope.output = "Please enter data first"
        $scope.buttonStyle = {"border-color": "red"};
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
        if (list[i].trim().length > 0) count += 1;
      }
      console.log(list);
      console.log(list.filter(String));
      return count;
    }
  }
})();
