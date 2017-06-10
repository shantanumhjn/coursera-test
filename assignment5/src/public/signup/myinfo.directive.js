(function () {
  'use strict';

  angular.module('public')
    .directive('myInfo', MyInfoDirective);

  function MyInfoDirective () {
    var ddo = {
      templateUrl: 'src/public/signup/myinfo.html',
      controller: "MyInfoController",
      controllerAs: 'myinfoCtrl',
      link: LinkFunction
    };

    return ddo;
  }

  function LinkFunction (scope, elm, attrs, ctrl) {
    ctrl.$validators.validItem = function (mValue, vValue) {
      if (vValue = 'L1')
        return true;
      else {
        return false;
      }
    };
    // console.log(ctrl);
    // console.log("ctrl.$asyncValidators:", ctrl.$asyncValidators);
    // console.log("ctrl.$validators:", ctrl.$validators);
  }
})();
