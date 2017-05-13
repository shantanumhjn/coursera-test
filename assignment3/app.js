(function () {
  'use strict';

  angular.module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .directive("foundItems", FoundItems)
    .constant("baseURL", "https://davids-restaurant.herokuapp.com/menu_items.json");

  function FoundItems() {
    var ddo = {
      templateUrl: "list.html",
      scope: {
        items: "<",
        onRemove: "&",
      },
      filter: "E"
    };
    return ddo;
  }

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController (svc) {
    var ctrl = this;

    ctrl.search_term = "";
    ctrl.found = [];
    ctrl.fethingData = false;
    ctrl.emptyResultMessage = "";

    ctrl.getMatchedMenuItems = function () {
      ctrl.found = [];
      ctrl.search_term = ctrl.search_term.toLowerCase();
      if (ctrl.search_term.trim()) {
        ctrl.fetchingData = true;
        var promise = svc.getMatchedMenuItems(ctrl.search_term);
        promise.then(function (response) {
          ctrl.found = response;
          ctrl.fetchingData = false;
        })
        .catch(function (error) {
          console.log("Somthing went wrong", error);
        });
      }
      if (ctrl.found.length == 0) {
        ctrl.emptyResultMessage = "Nothing Found."
      }
    };

    ctrl.remove = function (index) {
      ctrl.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ["$http", "baseURL"];
  function MenuSearchService($http, url) {
    var svc = this;
    svc.getMatchedMenuItems = function (text) {
      return $http({url:url})
      .then(function (result) {
        var data = result.data.menu_items;
        var new_data = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].description.toLowerCase().indexOf(text) !== -1) {
            new_data.push(data[i])
          }
        }
        // return some object that can be used the then in the controller
        return new_data;
      });
    };
  }

})();
