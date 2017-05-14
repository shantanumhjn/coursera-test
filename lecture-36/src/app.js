(function () {
  'use strict';

  // dependency on ui.router for routing
  angular.module("RoutingApp", ["ui.router"]);

  // no second param means we are fetching the module
  angular.module("RoutingApp")
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to tab 1 if no other URL matches
    // .otherwise used for default view
    $urlRouterProvider.otherwise('/tab1');

    // Set up UI states
    $stateProvider
      .state('tab1', {
        url: '/tab1',
        templateUrl: 'src/tab1.html'
      })
      // the url prop is optional
      // if not specified abd used inside an ancher tag (a)
      // it wont show as a link and the url in the browser wont change
      .state('tab2', {
        url: '/tab2',
        templateUrl: 'src/tab2.html'

      });
  }
})();
