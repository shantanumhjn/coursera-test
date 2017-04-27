(function () {
  'use strict';

  angular.module("MsgApp", [])
    .controller("MsgController", MsgController)
    .filter("loves", LovesFilter); // add the custom filter to the module

  // inject the custom filter, "Filter" will be appended
  // to the keyword used while registering
  MsgController.$inject = ["$scope", "$filter", "lovesFilter"];
  // instead of service, the exact method is passed as argument wrt custom filters
  function MsgController(scope, filter, lovesFilter) {
    scope.name = "Moron";
    scope.stateOfBeing = "hungry";
    scope.cookieCost = 0.45;

    scope.sayMessage = function () {
      var msg = "I like to eat healthy snacks at night!";
      // apply filter
      var output = filter("uppercase")(msg);
      return output;
    };

    // using the custom filter.
    // can be used in html same way as regular filters
    scope.sayLovesMessage = function () {
      var msg = "I like to eat healthy snacks at night!";
      var output = lovesFilter(msg);
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

  // for custom filters we need a function that returns a function
  function LovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("like", "love");
      return input;
    };
  }
})();
