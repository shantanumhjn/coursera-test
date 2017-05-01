(function () {
  'use strict';

  // services are singleton in nature
  // services can be used to share data accross controllers
  angular.module("ShoppingListApp", [])
    .controller("ShoppingListAddController", ShoppingListAddController)
    .controller("ShoppingListShowController", ShoppingListShowController)
    .service("ShoppingListService", ShoppingListService);

  ShoppingListAddController.$inject = ["ShoppingListService"];
  function ShoppingListAddController(ShoppingListService) {
    var itemAdder = this;
    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";
    itemAdder.addItem = function () {
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
      itemAdder.itemName = "";
      itemAdder.itemQuantity = "";
    };

    // all the above is the same as
    // because doing var itemAdder = this; is just renaming the variable for us
    // this.itemName = "";
    // this.itemQuantity = "";
    // this.addItem = function () {
    //   ShoppingListService.addItem(this.itemName, this.itemQuantity);
    // };
  }

  ShoppingListShowController.$inject = ["ShoppingListService"];
  function ShoppingListShowController(ShoppingListService) {
    var showList = this;
    showList.items = ShoppingListService.getItems();
    showList.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    };
  }

  function ShoppingListService() {
    var service = this;
    // list of shopping items
    var items = [];
    service.addItem = function (itemName, itemQuantity) {
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      items.push(item);
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }
})();
