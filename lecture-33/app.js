(function () {
'use strict';

angular.module('ShoppingListComponentApp', [])
.controller('ShoppingListController', ShoppingListController)
.factory('ShoppingListFactory', ShoppingListFactory)
// components are restricted versions of directives
// isolate scope is alwasy created
// it does not take a function as a param, but just an object
// scope is replaced with bindings key word
// $cftrl is created by default as the controller alias
// rest eems to be the same
.component('shoppingList', {
  templateUrl: 'shoppingList.html',
  controller: ShoppingListComponentController,
  bindings: {
    items: '<',
    myTitle: '@title', // @ means DOM attribute value binding, thus the {{}}
    onRemove: '&'
  }
});

ShoppingListComponentController.$inject = ['$scope', '$element']
function ShoppingListComponentController($scope, $element) {
  var $ctrl = this;
  var totalItems;

  $ctrl.cookiesInList = function () {
    for (var i = 0; i < $ctrl.items.length; i++) {
      var name = $ctrl.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };

  $ctrl.remove = function (myIndex) {
    $ctrl.onRemove({ index: myIndex });
  };

  $ctrl.$onInit = function () {
    // console.log("We are in $onInit()");
    totalItems = 0;
  };

  $ctrl.$onChanges = function (changeObj) {
    console.log("Changes: ", changeObj);
  }


  // we are doing the same thing here and postLink
  // but here we dont need the $scope property
  // this is called for every change
  $ctrl.$doCheck = function () {
    console.log("before", totalItems);
    if (totalItems !== $ctrl.items.length) {
      totalItems = $ctrl.items.length;
      if ($ctrl.cookiesInList()) {
        var warningElem = $element.find('div.error');
        warningElem.slideDown(900);
      } else {
        var warningElem = $element.find('div.error');
        warningElem.slideUp(900);
      }
    }
    console.log("after", totalItems);
  };


  // like the link function in directives
//  $ctrl.$postLink = function () {
//    $scope.$watch('$ctrl.cookiesInList()', function (newValue, oldValue) {
//      console.log($element);
//      if (newValue === true) {
//        // Show warning
//        var warningElem = $element.find('div.error');
//        warningElem.slideDown(900);
//      }
//      else {
//        // Hide warning
//        var warningElem = $element.find('div.error');
//        warningElem.slideUp(900);
//      }
//    });
//  };
}


ShoppingListController.$inject = ['ShoppingListFactory'];
function ShoppingListController(ShoppingListFactory) {
  var list = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list.items = shoppingList.getItems();
  var origTitle = "Shopping List #1";
  list.title = origTitle + " (" + list.items.length + " items )";

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    shoppingList.addItem(list.itemName, list.itemQuantity);
    list.title = origTitle + " (" + list.items.length + " items )";
  }

  list.removeItem = function (itemIndex) {
    this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
    shoppingList.removeItem(itemIndex);
    this.title = origTitle + " (" + list.items.length + " items )";
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();
