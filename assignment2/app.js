(function () {
  'use strict';

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(srvc) {
    this.items = srvc.getToBuyItems();
    this.buyItem = function (itemIdx) {
      srvc.buyItem(itemIdx);
    };
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(srvc) {
    this.items = srvc.getBoughtItems();
  }

  // the service
  function ShoppingListCheckOffService() {
    function addToList (list, itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      list.push(item);
    }

    function initToBuyList() {
      var toBuy = [];
      addToList(toBuy, "Milk", "6 Bottles of");
      addToList(toBuy, "Eggs", "6");
      addToList(toBuy, "Bread", "1 Loaf of");
      addToList(toBuy, "Beer", "1 Case of");
      addToList(toBuy, "Lamborghini", "1");
      return toBuy;
    }

    // The lists to hold the items
    this.toBuy = initToBuyList();
    this.bought = [];

    this.getToBuyItems = function () {
      return this.toBuy;
    };

    this.getBoughtItems = function () {
      return this.bought;
    };

    this.buyItem= function (itemIdx) {
      var item = this.toBuy[itemIdx];
      this.bought.push(item);
      this.toBuy.splice(itemIdx, 1);
    };
  }
})();
