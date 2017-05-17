(function () {
'use strict';

// states can have controllers too
// and they are defined just as in directives
// either as string (as syntax)
// or function value

angular.module('ShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  // passing data to state's controller using resolve,
  // resolve prop can be a simple value
  // or promise, in which case the view represented by this state
  // will not load till the operation finishes.
  // we can even pass it a component
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as mainList',
    // this syntax saves us from minification
    // ans because a promise is being returned,
    // the view will not switch till data is available
    resolve: {
      items: ['ShoppingListService', function(ShoppingListService) {
        return ShoppingListService.getItems();
      }],
      // items2 : "hello"
    }
  })

  // passing data through url
  // surround param in {} in url prop
  // $stateParams contains all the params
  // will make this view a child of the list view
  // as a child view, we dont need to add resolve property again.
  // we can directly inject it
  .state("mainList.itemDetail", {
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemdetail',
    // url: '/item-detail/{itemId}',
    // dont have to specify url, instead we can use params
    //property, which is an object, each param will need to be initialised
    params: {
      itemId: null
    }
  });
}

})();
