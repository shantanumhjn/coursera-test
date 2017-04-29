(function () {
  'use strict';
  angular.module("CounterApp", [])
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope"];
  function CounterController(scope) {
    scope.onceCounter = 0;
    scope.counter = 0;
    scope.name = "Moron";

    scope.showNumberOfWatchers = function () {
      console.log("# of watchers: ", scope.$$watchersCount);
      // console.log("watchers: ", scope.$$watchers);
    };

    scope.countOnce = function () {
      scope.onceCounter = 1;
    };

    scope.upCounter = function () {
      scope.counter++;
    };

    // this is called whenever the digest loop runs
    // so this tells when how many time the loop runs
    // creates another watcher
    // again not recommended
    scope.$watch(function () {
      console.log("Digest Loop Fired!");
    })

    // manually adding a watcher
    // we specify the property to watch and the function that
    // tells us the new and old values
    // the function gets called whenever the value of the property changes
    // Note: not a recommended way to do this
    // does not reuse watchers created by angular
    // scope.$watch('onceCounter', function (newValue, oldValue) {
    //   console.log("onceCounter old value: ", oldValue);
    //   console.log("onceCounter new value: ", newValue);
    // });
    //
    // scope.$watch('counter', function (newValue, oldValue) {
    //   console.log("counter old value: ", oldValue);
    //   console.log("counter new value: ", newValue);
    // });
  }
})();
