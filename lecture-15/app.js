(function () {
  'use strict';
  angular.module("CounterApp", [])
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope", "$timeout"];
  function CounterController(scope, timeout) {
    scope.counter = 0;

    // setTimeout executes the function after the timeout
    // setTimeout gets a different event queue outside the angular context
    // and angular does not kick off its digest cycle when value is updated
    scope.upCounter = function () {
      setTimeout(function () {
        scope.counter++;
        console.log("counter incremented, value: " + scope.counter);
        // inside timeout we can kick off the digest cycle manually
        // but any errors in this block will not be visible to angular
        scope.$digest();
      }, 2000);
    };

    // better way than calling digest directly
    scope.upCounter1 = function () {
      setTimeout(function () {
        // this will everything happen inside the angular context
        // so no $digest needed here
        scope.$apply(function () {
          scope.counter++;
          console.log("counter incremented, value: " + scope.counter);
        });
      }, 2000);
    };

    // check if angular provides a service similar to native js
    // in this case there is a service called $timeout
    scope.upCounter2 = function () {
      timeout(function () {
        scope.counter++;
        console.log("counter incremented, value: " + scope.counter);
      }, 2000);
    };
  }
})();
