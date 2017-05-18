(function () {
  'use strict';
  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories', '$rootScope'];
  function CategoriesController(categories, $rootScope) {
      var $ctrl = this;
      this.categories = categories.data;
  }
})();
