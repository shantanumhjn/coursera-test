(function () {
  'use strict';

  angular.module('public')
    .directive('validItem', ValidItem);

  ValidItem.$inject = ['MenuService']
  function ValidItem (MenuService) {
    var ddo = {
      restrict: 'A',
      require: 'ngModel',
      link: function LinkFunction (scope, elm, attrs, ctrl) {
          // had to create link function inline because needed MenuService here
          ctrl.$asyncValidators.validItem = function (mValue, vValue) {
            return MenuService.getItem(vValue);
          };
        }

    };

    return ddo;
  }


})();
