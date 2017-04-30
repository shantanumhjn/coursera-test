(function () {
  'use strict';

  angular.module("ControllerAsApp", [])
    .controller("ParentController1", ParentController1)
    .controller("ChildController1", ChildController1)
    .controller("ParentController2", ParentController2)
    .controller("ChildController2", ChildController2);

  ParentController1.$inject = ["$scope"];
  function ParentController1($scope) {
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.parentValue = 1;
  }

  ChildController1.$inject = ["$scope"];
  function ChildController1($scope) {
    // console.log("$scope.parentValue: ", $scope.parentValue);
    // console.log("CHILD $scope: ", $scope);
    //
    // $scope.parentValue = 5;
    // console.log("*** CHANGED: $scope.parentValue = 5 ***");
    // console.log("$scope.parentValue: ", $scope.parentValue);
    // console.log("$scope: ", $scope);
    //
    // console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
    // $scope.pc.parentValue = 5;
    // console.log("*** CHANGED: $scope.pc.parentValue = 5 ***");
    // console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
    // console.log("$scope: ", $scope);
    //
    // console.log("$scope.$parent.parentValue: ", $scope.$parent.parentValue);
  }

  // ** Controller As syntax
  // using the As syntax, the controller is a property in $scope
  // so we need to not define anything on the scope directly
  // we can define properties on the Controller itself 
  function ParentController2() {
    var parent = this;
    parent.value = 1;
  }

  ChildController2.$inject = ["$scope"];
  function ChildController2($scope) {
    var child = this;
    child.value = 5;
    console.log("ChildController2 $scope: ", $scope);
  }

})();
