(function () {
  'use strict';

  angular.module('ShoppingList')
    .controller('ItemDetailController', ItemDetailController);

  // 'item' is injected through state's resolve
  // no using parents 'items'
  ItemDetailController.$inject = ['$stateParams', 'items']
  function ItemDetailController($stateParams, items) {
    var itemdetail = this;
    var item = items[$stateParams.itemId];
    itemdetail.name = item.name;
    itemdetail.quantity = item.quantity;
    itemdetail.description = item.description;
  }
})();
