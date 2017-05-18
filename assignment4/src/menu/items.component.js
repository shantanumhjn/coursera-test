(function () {
  'use strict';
  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'src/menu/templates/items.template.html',
      controller: ItemComponentController,
      bindings: {
        items: '<'
      }
    });

  function ItemComponentController () {
    var $ctrl = this;

    $ctrl.replace = function ($index) {
      if ($ctrl.items[$index].description) {
        var temp = $ctrl.items[$index].name;
        $ctrl.items[$index].name = $ctrl.items[$index].description;
        $ctrl.items[$index].description = temp;
      }
    };
  }
})();
