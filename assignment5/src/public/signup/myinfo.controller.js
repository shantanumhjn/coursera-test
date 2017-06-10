(function () {
  'use strict';

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['SignUpService', 'ApiPath'];
  function MyInfoController (SignUpService, ApiPath) {
    var myinfoCtrl = this;
    myinfoCtrl.apiPath = ApiPath;
    myinfoCtrl.user = SignUpService.getUserInfo();
  }
})();
