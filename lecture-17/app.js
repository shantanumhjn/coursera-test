(function () {
  'use strict';

  var shoppingList1 = [
    "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pesto Bismol",
    "Pesto Bismol (Chocolate flavor)", "Pesto Bismol (Cookie flavor)"
  ];

  var shoppingList2 = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];

  angular.module("ShoppingListApp", [])
    .controller("ShoppingListController", ShoppingListController);

  ShoppingListController.$inject = ["$scope"];
  function ShoppingListController (scope) {
    scope.shoppingList1 = shoppingList1;
    scope.shoppingList2 = shoppingList2;

    scope.addToList = function () {
      var newItem = {
        name: scope.newItemName,
        quantity: scope.newItemQuantity
      };
      // both statements below have same behaviour
      // indicating being the same object
      // but cause failure if both uncommented
      scope.shoppingList2.push(newItem);
      // shoppingList2.push(newItem);
    };
  }
})();
