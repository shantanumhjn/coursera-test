(function () {
  'use strict';

  angular.module("MsgApp", [])
    .controller("MsgController", MsgController);

  MsgController.$inject = ["$scope"];
  function MsgController(scope) {
    scope.name = "Moron";
    scope.stateOfBeing = "hungry";

    scope.sayMessage = function () {
      return "Some message";
    };

    scope.feed = function () {
      if (scope.stateOfBeing == "fed") {
        scope.stateOfBeing = "hungry";
      } else {
        scope.stateOfBeing = "fed";
      }
    };
  }
})();
