(function () {
  'use strict';
  angular.module('StateChange')
    .component('stateChange', {
      templateUrl: 'src/statechange/statechange.template.html',
      controller: StateChangeController
    });

  StateChangeController.$inject = ['$rootScope'];
  function StateChangeController($rootScope) {
    var $ctrl = this;
    var cancellers = [];

    $ctrl.$onInit = function () {
      var cancel = $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams, options) {
          // console.log('state change starting');
          $ctrl.loading = true;
        });
      cancellers.push(cancel);

      cancel = $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
          // console.log('state change success');
          $ctrl.loading = false;
        });
      cancellers.push(cancel);

      cancel = $rootScope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
          // console.log('state change failure:', error);
          $ctrl.loading = false;
        });
      cancellers.push(cancel);
    };

    $ctrl.$onDestroy = function (){
      cancellers.forEach(function (item) {
        item();
      });
    };
  }
})();
