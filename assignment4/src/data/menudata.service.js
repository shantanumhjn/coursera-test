(function () {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', '$timeout']
  function MenuDataService ($http, $timeout) {
    var service = this;

    var baseUrl = 'https://davids-restaurant.herokuapp.com';

    function callUrl(url) {
      return $http({
        method: 'GET',
        url: url
      });
    }

    service.getAllCategories = function () {
      var url = baseUrl + '/categories.json';
      return callUrl(url);
    };

    service.getItemsForCategory = function (categoryShortName) {
      var url = baseUrl + '/menu_items.json?category=' + categoryShortName;
      return callUrl(url);
    };
  }


})();
