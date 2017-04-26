(function () {
  'use strict';

  angular.module("MsgApp", [])
    .controller("MsgController", MsgController);

  MsgController.$inject = ["$scope", "$filter"];
  function MsgController(scope, filter) {
    scope.name = "Moron";
    scope.stateOfBeing = "hungry";
    scope.cookieCost = 0.45;

    scope.sayMessage = function () {
      var msg = "I like to eat healthy snacks at night!";
      // apply filter
      var output = filter("uppercase")(msg);
      return output;
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
