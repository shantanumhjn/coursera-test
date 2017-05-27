(function () {
  'use strict';

  angular.module('MyApp', [])
    .controller('MyAppController', MyAppController)
    .service('MyAppService', MyAppService);

  MyAppController.$inject = ['MyAppService'];
  function MyAppController (svc) {
    var ctrl = this;
    ctrl.pnr = '4331777966';
    ctrl.errorMsg = "";

    ctrl.getStatus = function () {
      ctrl.errorMsg = "";
      ctrl.passengers = [];
      svc.getStatus(ctrl.pnr)
        .then(function success(result) {
          console.log(result);
          if (result.data.status !== 'failed') {
            ctrl.passengers = result.data.passengers;
          } else {
            ctrl.errorMsg = result.data.message;
          }
        })
        .catch(function fail(result) {
          console.log('error:', result);
        });
    };
  }

  MyAppService.$inject = ['$http'];
  function MyAppService ($http) {
    var svc = this;

    svc.getStatus = function (pnr) {
      return $http({
        url: 'https://whispering-everglades-58992.herokuapp.com/pnr_status.json',
        params: {pnr: pnr}
      });
    };
  }
})();
