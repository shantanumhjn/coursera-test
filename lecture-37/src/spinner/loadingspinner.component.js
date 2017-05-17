(function () {
  'use strict';

  angular.module('Spinner')
    .component('loadingSpinner', {
        templateUrl: 'src/spinner/loadingspinner.template.html',
        controller: SpinnerController
    });

  SpinnerController.$inject = ['$rootScope'];
  function SpinnerController($rootScope) {
    console.log("spinner controller loading");
    var $ctrl = this;
    var cancellers = [];

    $ctrl.$onInit = function () {
      console.log('inside init');
      var cancel = $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams, options) {
          $ctrl.showSpinner = true;
          console.log('starting spinner');
        });
      cancellers.push(cancel);

      cancel = $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
          $ctrl.showSpinner = false;
          console.log('stopping spinner');
        });
      cancellers.push(cancel);

      cancel = $rootScope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
          $ctrl.showSpinner = false;
          console.log('stopping spinner error:', error);
        });
      cancellers.push(cancel);
    };

    $ctrl.$onDestroy = function () {
      cancellers.forEach(function (item) {
        item();
      });
    };
  }
})();
