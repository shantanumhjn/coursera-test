(function () {
  'use strict';
  angular.module("BindingApp", [])
    .controller("BindingController", BindingController);

  BindingController.$inject = ["$scope"];
  function BindingController (scope) {
    scope.firstName = "Moron";
    // initialization will cause the interpollation in html to never be updated
    // scope.fullName = "";

    scope.showNumberOfWatchers = function () {
      console.log("# of watchers: ", scope.$$watchersCount);
    };

    scope.setFullName = function () {
      scope.fullName = scope.firstName + " " + "Major";
    };

    scope.logFirstName = function () {
      console.log("first name is: ", scope.firstName);
    };

    scope.logFullName = function () {
      console.log("full name is: ", scope.fullName);
    };
  }
})();
