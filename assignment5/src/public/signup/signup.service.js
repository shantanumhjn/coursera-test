(function () {
  'use strict';

  angular.module('public')
    .service('SignUpService', SignUpService);

  function SignUpService () {
    var svc = this;

    svc.signUp = function (user) {
      svc.user = user;
      console.log("new user signed up:", svc.user);
    };

    svc.getUserInfo = function () {
      console.log('get user info called:', svc.user);
      return svc.user;
    };
  }
})();
